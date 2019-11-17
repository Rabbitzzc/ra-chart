<template>
  <div class="vue-supplier-chart">
    <div style="text-align:center">
      <p style="color:orange;font-weight:800; font-size:20px;">📈供应链图表工具</p>
    </div>
    <div class="sort-example">
      <h3 style="text-align:center; font-weight:800;">柱状图</h3>
      <ra-bar
        :element-id="'barbarbar'"
        :cwidth="cwidth"
        :cheight="cheight"
        :chart-data="mock.BarMock.datas"
        :chart-options="mock.BarMock.options"
        :css-style="{ width: '400px', height: '400px' }"
      >
      </ra-bar>
    </div>
    <div class="sort-example">
      <h3 style="text-align:center; font-weight:800;">动态-柱状图</h3>
      <ra-bar
        :element-id="'react-barbarbar'"
        :cwidth="cwidth"
        :cheight="cheight"
        :chart-data="mock.BarReactMock.datas"
        :chart-options="mock.BarReactMock.options"
        :css-style="{ width: '400px', height: '400px' }"
      >
      </ra-bar>
    </div>
    <div class="sort-example">
      <h3 style="text-align:center; font-weight:800;">横柱状图(平行柱状图)</h3>
      <ra-horizontalBar
        :element-id="'horizontalbarhorizontalbar'"
        :cwidth="cwidth"
        :cheight="cheight"
        :chart-data="mock.HorizontalBarMock.datas"
        :chart-options="mock.HorizontalBarMock.options"
        :css-style="{ width: '400px', height: '400px' }"
      >
      </ra-horizontalBar>
    </div>
    <div class="sort-example">
      <h3 style="text-align:center; font-weight:800;">饼图</h3>
      <ra-pie
        :element-id="'piepiepie'"
        :cwidth="cwidth"
        :cheight="cheight"
        :chart-data="mock.PieMock.datas"
        :chart-options="mock.PieMock.options"
        :css-style="{ width: '400px', height: '400px' }"
      >
      </ra-pie>
    </div>
    <div class="sort-example">
      <h3 style="text-align:center; font-weight:800;">气泡图</h3>
      <ra-bubble
        :element-id="'bubblebubble'"
        :cwidth="cwidth"
        :cheight="cheight"
        :chart-data="mock.BubbleMock.datas"
        :chart-options="mock.BubbleMock.options"
        :css-style="{ width: '400px', height: '400px' }"
      >
      </ra-bubble>
    </div>
    <div class="sort-example">
      <h3 style="text-align:center; font-weight:800;">折线图</h3>
      <ra-line
        :element-id="'linelineline'"
        :cwidth="cwidth"
        :cheight="cheight"
        :chart-data="mock.LineMock.datas"
        :chart-options="mock.LineMock.options"
        :css-style="{ width: '400px', height: '400px' }"
      >
      </ra-line>
    </div>
    <div class="sort-example">
      <h3 style="text-align:center; font-weight:800;">雷达图</h3>
      <ra-radar
        :element-id="'radarradarradar'"
        :cwidth="cwidth"
        :cheight="cheight"
        :chart-data="mock.RaderMock.datas"
        :chart-options="mock.RaderMock.options"
        :css-style="{ width: '400px', height: '400px' }"
      >
      </ra-radar>
    </div>
    <div class="sort-example">
      <h3 style="text-align:center; font-weight:800;">极地图</h3>
      <ra-scatter
        :element-id="'scatterscatter'"
        :cwidth="cwidth"
        :cheight="cheight"
        :chart-data="mock.ScatterMock.datas"
        :chart-options="mock.ScatterMock.options"
        :css-style="{ width: '400px', height: '400px' }"
      >
      </ra-scatter>
    </div>
    <div class="sort-example">
      <h3 style="text-align:center; font-weight:800;">区域图</h3>
      <ra-polar-area
        :element-id="'polarareapolararea'"
        :cwidth="cwidth"
        :cheight="cheight"
        :chart-data="mock.PolarAreaMock.datas"
        :chart-options="mock.PolarAreaMock.options"
        :css-style="{ width: '400px', height: '400px' }"
      >
      </ra-polar-area>
    </div>
    <div class="sort-example">
      <h3 style="text-align:center; font-weight:800;">圆环图</h3>
      <ra-doughnut
        :element-id="'doughnutdoughnut'"
        :cwidth="cwidth"
        :cheight="cheight"
        :chart-data="mock.DoughnutMock.datas"
        :chart-options="mock.DoughnutMock.options"
        :css-style="{ width: '400px', height: '400px' }"
      >
      </ra-doughnut>
    </div>
  </div>
</template>
<script>
import {
  raBar,
  raPie,
  raBubble,
  raLine,
  raRadar,
  raHorizontalBar,
  raPolarArea,
  raScatter,
  raDoughnut,
} from '../src/core';

import BarMock from './mock/Bar.mock';
import BarReactMock from './mock/Bar.react.mock';
import BubbleMock from './mock/Bubble.mock';
import LineMock from './mock/Line.mock';
import PieMock from './mock/Pie.mock';
import RaderMock from './mock/Radar.mock';
import HorizontalBarMock from './mock/HorizontalBar.mock';
import ScatterMock from './mock/Scatter.mock';
import DoughnutMock from './mock/Doughnut.mock';
import PolarAreaMock from './mock/PolarArea.mock';

export default {
  components: {
    raBar,
    raPie,
    raBubble,
    raLine,
    raRadar,
    raHorizontalBar,
    raPolarArea,
    raScatter,
    raDoughnut,
  },
  data() {
    return {
      cwidth: 400,
      cheight: 400,
      mock: {
        BarMock,
        BarReactMock,
        BubbleMock,
        LineMock,
        PieMock,
        RaderMock,
        HorizontalBarMock,
        ScatterMock,
        DoughnutMock,
        PolarAreaMock,
      },
    };
  },
  mounted() {
    setInterval(() => {
      this.fillBarData();
    }, 5000);
  },
  computed: {},
  methods: {
    fillBarData() {
      // this.mock.BarReactMock.datas.datasets[0].data = [
      //   this.randomData(),
      //   this.randomData(),
      //   this.randomData(),
      //   this.randomData(),
      //   this.randomData(),
      //   this.randomData(),
      // ];
      this.mock.BarReactMock.datas = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '哈哈哈哈',
            data: [
              this.randomData(),
              this.randomData(),
              this.randomData(),
              this.randomData(),
              this.randomData(),
              this.randomData(),
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    },
    randomData() {
      return Math.floor(Math.random() * 100);
    },
  },
};
</script>

<style lang="scss" scoped>
.vue-supplier-chart {
  .sort-example {
    width: 700px;
    padding: 20px 130px;
    border-radius: 3%;
    margin: 10px auto;
    border: 1px solid #eee;
    box-shadow: 0px 0px 20px 2px #ccc;
  }
}
</style>
