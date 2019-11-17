// 对于数据，如果是动态的，则可以直接持续监听，比如股票K线折线图
export default {
  watch: {
    chartData(vl, ol) {
      this.chartDataHandle(vl, ol);
    },
    // 数据层数过大，使用deep:true会造成内存过大报错
    // deep: true,
  },
  methods: {
    // 图表数据动态
    // props的数据更改是能监听到的
    chartDataHandle(vl, ol) {
      if (ol) {
        const chart = this.$chart;

        // 获取 label
        const vlsetLabels = vl.datasets.map(dataset => dataset.label);

        const olsetLabels = ol.datasets.map(dataset => dataset.label);

        // Stringify 'em for easier compare
        const oldLabels = JSON.stringify(olsetLabels);
        const newLabels = JSON.stringify(vlsetLabels);

        // 判断Label是否修改，如果修改则重新渲染
        if (newLabels === oldLabels && ol.datasets.length === vl.datasets.length) {
          vl.datasets.forEach((dataset, i) => {
            // Get new and old dataset keys
            const olsetKeys = Object.keys(ol.datasets[i]);
            const vlsetKeys = Object.keys(dataset);

            // 获取数组已经删除的keys
            const deletionKeys = olsetKeys.filter(key => key !== '_meta' && vlsetKeys.indexOf(key) === -1);

            // 在数据中移除keys
            deletionKeys.forEach((deletionKey) => {
              delete chart.data.datasets[i][deletionKey];
            });

            // 单独更新属性以避免重新呈现整个图表
            // eslint-disable-next-line no-restricted-syntax
            for (const attribute in dataset) {
              if (dataset.hasOwnProperty(attribute)) {
                chart.data.datasets[i][attribute] = dataset[attribute];
              }
            }
          });

          if (vl.hasOwnProperty('labels')) {
            chart.data.labels = vl.labels;
            this.$emit('labels:update');
          }
          if (vl.hasOwnProperty('xLabels')) {
            chart.data.xLabels = vl.xLabels;
            this.$emit('xlabels:update');
          }
          if (vl.hasOwnProperty('yLabels')) {
            chart.data.yLabels = vl.yLabels;
            this.$emit('ylabels:update');
          }
          chart.update();
          this.$emit('chart:update');
        } else {
          if (chart) {
            chart.destroy();
            this.$emit('chart:destroy');
          }
          this.renderChart();
          this.$emit('chart:render');
        }
      } else {
        if (this.$chart) {
          this.$chart.destroy();
          this.$emit('chart:destroy');
        }
        this.renderChart();
        this.$emit('chart:render');
      }
    },
  },
};
