export default {
  datas: {
    labels: ['写代码', '看电影', '睡觉', '学习', '跑步', '游泳', '陪爱人'],
    datasets: [
      {
        label: '区域图',
        backgroundColor: ['#f03434', '#29f1c3', '#00b5cc', '#67809f', '#f2784b', '#e9d460', '#9a12b3'],
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [65, 59, 90, 81, 56, 55, 40],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
};
