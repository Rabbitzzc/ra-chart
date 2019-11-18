<template>
  <div class="vue-supplier-chart">
    <div style="text-align:center">
      <!-- <p style="color:orange;font-weight:800; font-size:20px;">📈</p> -->
      <h1><a href="https://github.com/Rabbitzzc/ra-vchart">Ra-Charts</a></h1>
      <p class="desc">ChartJs component for Vue.js.</p>
    </div>
    <div class="sort-example">
      <h3 class="chart-title">
        <a href="#bar">柱状图</a>
      </h3>
      <section>
        <figure class="half">
          <ra-bar
            :element-id="'barbarbar'"
            :cwidth="cwidth"
            :cheight="cheight"
            :chart-data="mock.BarMock.datas"
            :chart-options="mock.BarMock.options"
            :css-style="{ width: '400px', height: '300px' }"
          >
          </ra-bar>
        </figure>
        <figure class="half">
          <ra-bar
            :element-id="'react-barbarbar'"
            :cwidth="cwidth"
            :cheight="cheight"
            :chart-data="mock.BarReactMock.datas"
            :chart-options="mock.BarReactMock.options"
            :css-style="{ width: '400px', height: '300px' }"
          >
          </ra-bar>
        </figure>
      </section>
    </div>
    <div class="sort-example">
      <h3 class="chart-title">
        <a href="#horizontalbar">横柱状图(平行柱状图)</a>
      </h3>
      <section>
        <figure>
          <ra-horizontalBar
        :element-id="'horizontalbarhorizontalbar'"
        :cwidth="cwidth"
        :cheight="cheight"
        :chart-data="mock.HorizontalBarMock.datas"
        :chart-options="mock.HorizontalBarMock.options"
        :css-style="{ width: '600px', height: '300px' }"
      >
      </ra-horizontalBar>
        </figure>
      </section>
    </div>
    <div class="sort-example">
      <h3 class="chart-title">
        <a href="#pie">饼图</a>
      </h3>
      <section>
        <figure>
          <ra-pie
        :element-id="'piepiepie'"
        :cwidth="cwidth"
        :cheight="cheight"
        :chart-data="mock.PieMock.datas"
        :chart-options="mock.PieMock.options"
        :css-style="{ width: '600px', height: '300px' }"
      >
      </ra-pie>
        </figure>
      </section>
    </div>
    <div class="sort-example">
      <h3 class="chart-title">
        <a href="bubble">气泡图</a>
      </h3>
      <section>
        <figure>
          <ra-bubble
        :element-id="'bubblebubble'"
        :cwidth="cwidth"
        :cheight="cheight"
        :chart-data="mock.BubbleMock.datas"
        :chart-options="mock.BubbleMock.options"
        :css-style="{ width: '600px', height: '300px' }"
      >
      </ra-bubble>
        </figure>
      </section>
    </div>
    <div class="sort-example">
      <h3 class="chart-title">
        <a href="#line">折线图</a>
      </h3>
      <section>
        <figure>
          <ra-line
        :element-id="'linelineline'"
        :cwidth="cwidth"
        :cheight="cheight"
        :chart-data="mock.LineMock.datas"
        :chart-options="mock.LineMock.options"
        :css-style="{ width: '600px', height: '300px' }"
      >
      </ra-line>
        </figure>
      </section>
    </div>
    <div class="sort-example">
      <h3 class="chart-title">
        <a href="#radar">雷达图</a>
      </h3>
      <section>
        <figure>
          <ra-radar
        :element-id="'radarradarradar'"
        :cwidth="cwidth"
        :cheight="cheight"
        :chart-data="mock.RaderMock.datas"
        :chart-options="mock.RaderMock.options"
        :css-style="{ width: '600px', height: '300px' }"
      >
      </ra-radar>
        </figure>
      </section>
    </div>
    <div class="sort-example">
      <h3 class="chart-title">
        <a href="#scatter">极地图</a>
      </h3>
      <section>
        <figure>
      <ra-scatter
        :element-id="'scatterscatter'"
        :cwidth="cwidth"
        :cheight="cheight"
        :chart-data="mock.ScatterMock.datas"
        :chart-options="mock.ScatterMock.options"
        :css-style="{ width: '600px', height: '300px' }"
      >
      </ra-scatter>
        </figure>
      </section>
    </div>
    <div class="sort-example">
      <h3 class="chart-title">
        <a href="#polararea">区域图</a>
      </h3>
      <section>
        <figure>
      <ra-polar-area
        :element-id="'polarareapolararea'"
        :cwidth="cwidth"
        :cheight="cheight"
        :chart-data="mock.PolarAreaMock.datas"
        :chart-options="mock.PolarAreaMock.options"
        :css-style="{ width: '600px', height: '300px' }"
      >
      </ra-polar-area>
        </figure>
      </section>
    </div>
    <div class="sort-example">
      <h3 class="chart-title">
        <a href="#doughnut">圆环图</a>
      </h3>
      <section>
        <figure>
          <ra-doughnut
        :element-id="'doughnutdoughnut'"
        :cwidth="cwidth"
        :cheight="cheight"
        :chart-data="mock.DoughnutMock.datas"
        :chart-options="mock.DoughnutMock.options"
        :css-style="{ width: '600px', height: '300px' }"
      >
      </ra-doughnut>
        </figure>
      </section>
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
      cheight: 300,
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
      times: null,
    };
  },
  mounted() {
    this.times = setInterval(() => {
      this.fillBarData();
    }, 5000);
  },
  computed: {},
  updated() {
    clearInterval(this.times);
    this.times = setInterval(() => {
      this.fillBarData();
    }, 5000);
  },
  methods: {
    fillBarData() {
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
*,
*::before,
*::after {
  box-sizing: border-box;
}

a{

  color:inherit;
  text-decoration:none;
}
h1 {
  margin-bottom: 1em;
  font-family: Dosis, "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  color:#2c3e50;
  font-weight:300;

}
h3 {
  text-align: center;
  font-weight: 400;
}
.vue-supplier-chart {
  .chart-title {

  }
  section {
    width: 100%;
    text-align: center;
    figure {
      display: inline-block;
      position: relative;
      margin: 2em auto;
      border: 1px solid rgba(0, 0, 0, .1);
      border-radius:8px;
      box-shadow:0 0 45px rgba(0, 0, 0, .2);
      padding:1.5em 2em;
      min-width: calc(40vw + 4em);
    }
    .half {
      padding: 1em 1.5em;
      min-width: calc(280px + 3em);
      &:not(last-child) {
        margin-right: 15px;
      }
    }
  }
  .desc {
    margin-bottom:3em;
    color:#7f8c8d;
  }
}
</style>
