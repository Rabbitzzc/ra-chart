import {
  raBar,
  raBubble,
  raDoughnut,
  raHorizontalBar,
  raLine,
  raPie,
  raPolarArea,
  raRadar,
  raScatter,
} from './ra-chart';

// raVChart 是可视化组件集合，不是组件
const RaChart = {
  raBar,
  raBubble,
  raDoughnut,
  raHorizontalBar,
  raLine,
  raPie,
  raPolarArea,
  raRadar,
  raScatter,
  render() {
    console.warn(
      'RaChart不是单个可视化组件，而是可视化组件集合，请使用 raBar,raBubble,raDoughnut,raHorizontalBar,raLine,raPie,raPolarArea,raRadar,raScatter',
    );
  },
};

export default RaChart;
export {
  RaChart,
  raBar,
  raBubble,
  raDoughnut,
  raHorizontalBar,
  raLine,
  raPie,
  raPolarArea,
  raRadar,
  raScatter,
};
