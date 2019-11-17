import factory from './factory';

// 装饰一下
const decorator = v => factory(`ra-${v.toLowerCase()}-chart-canvas`, v);

// 封装图表
export const raBar = decorator('bar');
export const raBubble = decorator('bubble');
export const raDoughnut = decorator('doughnut');
export const raHorizontalBar = decorator('horizontalBar');
export const raLine = decorator('line');
export const raPie = decorator('pie');
export const raPolarArea = decorator('polarArea');
export const raRadar = decorator('radar');
export const raScatter = decorator('scatter');

// 导出全部组件
export default {
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
