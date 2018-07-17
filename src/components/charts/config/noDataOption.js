const noDataOption = {
  series: [
    {
      type: 'scatter',
      data: [[0, 0]],
      symbolSize: 1,
      label: {
        normal: {
          show: true,
          formatter: '暂无数据',
          color: '#000',
          fontSize: 14,
          lineHeight: 30
        }
      }
    }
  ],
  xAxis: {
    axisLabel: { show: false },
    axisLine: { show: false },
    splitLine: { show: false },
    axisTick: { show: false },
    min: -1,
    max: 1
  },
  yAxis: {
    axisLabel: { show: false },
    axisLine: { show: false },
    splitLine: { show: false },
    axisTick: { show: false },
    min: -1,
    max: 1
  }
};

export default noDataOption;
