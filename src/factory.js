import Chart from 'chart.js';
import equal from './util/equal';

/**
 * @param {String} elementId 不同类型图表，设置不同的id
 * @param {String} type 不同类型的图标[line, bar, xxx]
 * @deprecated: 根据传入的type类型，生成不同图表组件
 */
export default function factory(elementId, type) {
  // 列举所有方法
  // const enumMethods = [
  //   'clear',
  //   'stop',
  //   'resize',
  //   'toBase64Image',
  //   'generateLegend',
  //   'update',
  //   'addData',
  //   'removeData'];

  return {
    name: `ra-${type}`,
    props: {
      // canvas的宽高，不能使用相对属性
      elementId: {
        type: String,
        default: elementId,
      },
      cwidth: {
        type: [Number, String],
        default: 400,
      },
      cheight: {
        type: [Number, String],
        default: 400,
      },
      cssClass: {
        type: String,
        default: '',
      },
      cssStyle: {
        type: Object,
        default: () => {},
      },
      // chart数据和配置选项
      chartData: {
        type: Object,
        required: true,
        default: () => {},
      },
      chartOptions: {
        type: Object,
        required: true,
        default: () => {},
      },
      plugins: {
        type: Array,
        default: () => [],
      },
    },
    watch: {
      // options变化
      chartOptions(vl) {
        // 当options变化的时候
        this.$chart.options = Chart.helpers.configMerge(this.$chart.options, vl);
        this.updateChart();
      },
      chartData(vl, ol) {
        this.dataHandle(vl, ol);
      },
    },
    data() {
      return {
        $chart: null,
        $plugins: this.plugins,
      };
    },
    mounted() {
      this.renderChart();
    },
    methods: {
      // 渲染图表
      renderChart() {
        // 基于 canvas的图表，删除再重建
        this.chartDestroy();

        // 获取id
        // const raChart = document.getElementById(this.elementId)
        // 基于 canvas 的getContext实现
        const chart = this.$refs.ra_canvas.getContext('2d');
        this.$chart = new Chart(chart, {
          type,
          data: this.chartData,
          options: this.chartOptions,
        });
        this.$emit('chart:render');
      },
      // clean，清除功能放在一块，定时器等易于扩展
      clean() {
        this.chartDestroy();
        this.$plugins = [];
      },
      // 增加插件
      // addPlugin(plugin) {
      //   this.$plugins.push(plugin);
      // },
      // 生成lengend HTML，可实现自定义配置
      generateLegend() {
        return this.$chart && this.$chart.generateLegend();
      },
      // 销毁chart
      chartDestroy() {
        if (this.$chart) {
          this.$chart.destroy();
          this.$emit('chart:destroy');
        }
      },
      // 更新chart
      updateChart() {
        if (this.$chart) {
          this.$chart.update();
          this.$emit('chart:update');
        }
      },
      dataHandle(vl, ol) {
        if (ol) {
          const chart = this.$chart;
          // 比较dataset label
          const vlsetLabels = vl.datasets.map(dataset => dataset.label);
          const olsetLabels = ol.datasets.map(dataset => dataset.label);

          // datasets 处理

          if (equal(vlsetLabels, olsetLabels)) {
            vl.datasets.forEach((next, i) => {
              // 比较图表中的新的dataset和旧数据之间的区别
              const nextKeys = Object.keys(next);
              const preKeys = Object.keys(ol.datasets[i]);
              const removeKeys = preKeys.filter(key => key !== '_meta' && nextKeys.indexOf(key) === -1);

              // 平滑删除图表对象中的需要删除的key值
              removeKeys.forEach((key) => {
                delete chart.data.datasets[i][key];
              });

              // 删除后赋值
              // eslint-disable-next-line no-restricted-syntax
              for (const key in next) {
                if (next.hasOwnProperty(key)) {
                  chart.data.datasets[i][key] = next[key];
                }
              }
            });

            // data.not-datasets处理
            // Line Bar
            if (vl.hasOwnProperty('labels')) {
              chart.data.labels = vl.labels;
            }
            if (vl.hasOwnProperty('xLabels')) {
              chart.data.xLabels = vl.xLabels;
            }
            if (vl.hasOwnProperty('yLabels')) {
              chart.data.yLabels = vl.yLabels;
            }
            this.updateChart();
          } else {
            this.renderChart();
          }
        } else {
          this.renderChart();
        }
      },
    },
    beforeDestroy() {
      this.clean();
    },
    render(createElement) {
      return createElement(
        'div',
        {
          class: this.cssClass,
          style: this.cssStyle,
        },
        [
          createElement('canvas', {
            // 设置宽高，就需要设置外层style
            attrs: {
              id: this.elementId,
              width: this.cwidth,
              height: this.cheight,
              plugins: this.$plugins,
            },
            ref: 'ra_canvas',
          }),
        ],
      );
    },
  };
}
