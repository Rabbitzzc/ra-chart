import Chart from 'chart.js';
// 冬天
import dynamic from './mixins/dynamic';
/**
 * @param {String} elementId 不同类型图表，设置不同的id
 * @param {String} type 不同类型的图标[line, bar, xxx]
 * @deprecated: 根据传入的type类型，生成不同图表组件
 */
export default function factory(elementId, type) {
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
      // active: {
      //   type: Boolean,
      //   default: false,
      // },
    },
    mixins: [dynamic],
    data() {
      return {
        $chart: null,
        $plugins: this.plugins,
      };
    },
    mounted() {
      this.renderChart();
    },
    // watch: {
    //   chartData: {
    //     handle(ol, vl) {
    //       this.chartDataHandle(ol, vl)
    //     },
    //     deep: true,
    //   },
    // },
    methods: {
      // 渲染图表
      renderChart() {
        // 基于 canvas的图表，删除再重建
        if (this.$chart) {
          this.$chart.destroy();
          this.$emit('chart:destroy');
        }

        // 获取id
        // const raChart = document.getElementById(this.elementId)
        // 基于 canvas 的getContext实现
        const chart = this.$refs.ra_canvas.getContext('2d');
        this.$chart = new Chart(chart, {
          type,
          data: this.chartData,
          options: this.chartOptions,
        });
      },
      // clean，清除功能放在一块，定时器等易于扩展
      clean() {
        if (this.$chart) {
          this.$chart.destroy();
          this.$emit('chart:destroy');
        }
        this.$plugins = [];
      },
      // 增加插件
      addPlugin(plugin) {
        this.$plugins.push(plugin);
      },
      // 生成lengend HTML，可实现自定义配置
      generateLegend() {
        return this.$chart && this.$chart.generateLegend();
      },
    },
    beforeDestroy() {
      this.clean();
    },
    render(createElement) {
      //   return createElement('canvas', {
      //     attrs: {
      //       id: this.elementId,
      //       width: this.width,
      //       height: this.height,
      //     },
      //     ref: 'ra_canvas',
      //   })
      // },
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
