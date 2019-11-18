<template>
  <div class="vue-supplier-chart">
    <div style="text-align:center; margin-top:100px">
      <img src="../public/less-red.png" style="width:160px; cursor:pointer;">
      <!-- <h1><a href="https://github.com/Rabbitzzc/ra-vchart">Ra-Charts</a></h1> -->
      <p class="desc">ChartJs component for Vue.js.</p>
    </div>
    <div class="sort-example">
      <h3 class="chart-title">
        <a href="#bar">柱状图<small>Bar</small></a>
      </h3>
      <section>
        <figure class="half">
          <ra-bar
            :element-id="'barbarbar'"
            :cwidth="cwidth"
            :cheight="cheight"
            :chart-data="mock.BarMock.datas"
            :chart-options="mock.BarMock.options"
            :css-style="{ width: '300px', height: '200px' }"
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
            :css-style="{ width: '300px', height: '200px' }"
          >
          </ra-bar>
        </figure>
        <figure class="half">
          <ra-bar
            :element-id="'react-add-barbarbar'"
            :cwidth="cwidth"
            :cheight="cheight"
            :chart-data="mock.BarReactAddMock.datas"
            :chart-options="mock.BarReactAddMock.options"
            :css-style="{ width: '300px', height: '200px' }"
            ref="reactaddbar"
          >
          </ra-bar>
        </figure>
      </section>
    </div>
    <div class="sort-example">
      <h3 class="chart-title">
        <a href="#horizontalbar">横柱状图(平行柱状图)<small>Horizontal Bar</small></a>
      </h3>
      <section>
        <figure class="half">
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
        <a href="#line">折线图<small>Line</small></a>
      </h3>
      <section>
        <figure class="half">
          <ra-line
            :element-id="'linelineline'"
            :cwidth="cwidth"
            :cheight="cheight"
            :chart-data="mock.LineMock.datas"
            :chart-options="mock.LineMock.options"
            :css-style="{ width: '300px', height: '200px' }"
          >
          </ra-line>
        </figure>
        <figure class="half">
          <ra-line
            :element-id="'linelineline'"
            :cwidth="cwidth"
            :cheight="cheight"
            :chart-data="mock.LineReactMock.datas"
            :chart-options="mock.LineReactMock.options"
            :css-style="{ width: '300px', height: '200px' }"
          >
          </ra-line>
        </figure>
        <figure class="half">
          <ra-line
            :element-id="'linelineline'"
            :cwidth="cwidth"
            :cheight="cheight"
            :chart-data="mock.LineReactAddMock.datas"
            :chart-options="mock.LineReactAddMock.options"
            :css-style="{ width: '300px', height: '200px' }"
            ref="reactaddline"
          >
          </ra-line>
        </figure>
      </section>
    </div>
    <div class="sort-example">
      <h3 class="chart-title">
        <a href="#pie">饼图<small>Pie</small></a>
      </h3>
      <section>
        <figure class="half">
          <ra-pie
            :element-id="'piepiepie'"
            :cwidth="cwidth"
            :cheight="cheight"
            :chart-data="mock.PieMock.datas"
            :chart-options="mock.PieMock.options"
            :css-style="{ width: '400px', height: '300px' }"
          >
          </ra-pie>
        </figure>
        <figure class="half">
          <button @click="addPieData">random data</button>
          <ra-pie
            :element-id="'piepiepie'"
            :cwidth="cwidth"
            :cheight="cheight"
            :chart-data="mock.PieReactAddMock.datas"
            :chart-options="mock.PieReactAddMock.options"
            :css-style="{ width: '400px', height: '277px'}"
            ref="reactaddpie"
          >
          </ra-pie>
        </figure>
      </section>
    </div>
    <div class="sort-example">
      <h3 class="chart-title">
        <a href="#doughnut">圆环图<small>Doughnut</small></a>
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
    <div class="sort-example">
      <h3 class="chart-title">
        <a href="bubble">气泡图<small>Bubble</small></a>
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
        <a href="#radar">雷达图<small>Radar</small></a>
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
        <a href="#scatter">极地图<small>Scatter</small></a>
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
        <a href="#polararea">区域图<small>PolarArea</small></a>
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
    <footer>
      <a href="https://github.com/Rabbitzzc">@Rabbitzzc</a>|<a href="https://github.com/Rabbitzzc/ra-vchart">View on GitHub</a>
    </footer>
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
import BarReactAddMock from './mock/Bar.react.add.mock';
import BubbleMock from './mock/Bubble.mock';
import LineMock from './mock/Line.mock';
import LineReactMock from './mock/Line.react.mock';
import LineReactAddMock from './mock/Line.react.add.mock';
import PieMock from './mock/Pie.mock';
import PieReactAddMock from './mock/Pie.react.add.mock';
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
        BarReactAddMock,
        BubbleMock,
        LineMock,
        PieMock,
        RaderMock,
        HorizontalBarMock,
        ScatterMock,
        DoughnutMock,
        PolarAreaMock,
        LineReactMock,
        LineReactAddMock,
        PieReactAddMock,
      },
      times: null,
    };
  },
  mounted() {
    this.times = setInterval(() => {
      this.fillBarData();
      this.addBarData();
      this.fillLineData();
      this.addLineData();
    }, 5000);
  },
  computed: {},
  updated() {
    clearInterval(this.times);
    this.times = setInterval(() => {
      this.fillBarData();
      this.addBarData();
      this.fillLineData();
      this.addLineData();
    }, 5000);
  },
  beforeDestroy() {
    clearInterval(this.times);
  },
  methods: {
    fillBarData() {
      this.mock.BarReactMock.datas = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '数据全部替换',
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
    addBarData() {
      // 动态配置options
      this.$refs.reactaddbar.optionsHandle({
        title: {
          display: true,
          text: 'Custom Chart Title',
        },
      }, false);
      // 动态塞数据
      this.$refs.reactaddbar.stuffData(`${this.randomData()}color`, [this.randomData()]);
    },
    addPieData() {
      this.$refs.reactaddpie.stuffData(`${this.randomData()}Js`, [this.randomData()]);
      // this.$refs.reactaddpie.
      // this.mock.PieReactAddMock.datas = {
      //   labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
      //   datasets: [
      //     {
      //       backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      //       data: [40, 20, 80, 10],
      //     },
      //   ],
      // };
    },
    removePieData() {

    },
    fillLineData() {
      this.mock.LineReactMock.datas = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [
              this.randomData(),
              this.randomData(),
              this.randomData(),
              this.randomData(),
              this.randomData(),
              this.randomData(),
              this.randomData(),
            ],
          },
        ],
      };
    },
    addLineData() {
      this.$refs.reactaddline.stuffData(`${this.randomData()}月`, [this.randomData()]);
    },
    randomData() {
      return Math.floor(Math.random() * 100);
    },
    dynamicColors() {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      return `rgb(${r},${g},${b})`;
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

body {
  margin: 0;
  padding :3em 0 0;
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  color: #666;
  text-align:center;
}

a {
  color: inherit;
  text-decoration: none;
}
h1 {
  margin-bottom: 1em;
  font-family: Dosis, "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  color: #2c3e50;
  font-weight: 300;
}
h3 {
  text-align: center;
  font-weight: 400;
}

footer {
  text-align: center;
  margin: 5em 0 3em;
  font-size: .3em;
  vertical-align: middle;
  a {
    display: inline-block;
    margin: 0 5px;
    padding :3px 0 6px;
    color: #7f8c8d;
    font-size :2em;
    text-decoration: none;
    &:hover{
      padding-bottom: 3px;
      border-bottom: 3px solid#42b983;
    }
  }
}
.vue-supplier-chart {
  .chart-title {
    a {
      small {
        margin-left: 10px;
        opacity: .7;
        font-size:.8em;
        color: #7f8c8d;
      }
    }
  }
  section {
    width: 100%;
    text-align: center;
    figure {
      cursor: pointer;
      display: inline-block;
      position: relative;
      margin: 2em auto;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      box-shadow: 0 0 45px rgba(0, 0, 0, 0.2);
      padding: 1.5em 2em;
      min-width: calc(40vw + 4em);
      transition: box-shadow 1s;
      &:hover {
        box-shadow: 0 0 45px rgba(0, 0, 0, 0.5);
      }
    }
    .half {
      padding: 1em 1.5em;
      vertical-align: top;
      min-width: calc(280px + 3em);
      &:not(last-child) {
        margin-right: 15px;
      }
    }
  }
  .desc {
    margin-bottom: 3em;
    color: #7f8c8d;
  }
}
</style>
