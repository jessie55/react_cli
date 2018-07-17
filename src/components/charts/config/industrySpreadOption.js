const industorySpreadOption = {
  title: {
    text: '债券行业利差分析',
    subtext: '',
    left: 'center'
  },
  grid: {
    left: '10%',
    right: '15%',
    bottom: 65
  },
  legend: {
    top: 60,
    right: 10,
    align: 'left',
    orient: 'vertical'
  },
  toolbox: {
    right: 10,
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: 'none'
      },
      saveAsImage: {
        title: '保存图片'
      }
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    name: '日期',
    axisTick: {
      show: false
    },
    splitLine: {
      show: false
    },
    data: [], // 手动指定x轴的数据
    axisLabel: {
      showMinLabel: false,
      showMaxLabel: false,
      interval: (index, value) => { // x 轴 label 数据间隔
        const date = new Date(parseInt(value, 10));
        return [3, 6, 9, 12].includes(date.getMonth() + 1) && date.getDate() === 1;
      },
      formatter: (value) => { // x 轴 label 数据格式化显示
        const date = new Date(parseInt(value, 10));
        return (`${date.getFullYear().toString().substring(2, 4)}\n年\n${date.getMonth() + 1}\n月`);
      }
    }
  },
  yAxis: {
    type: 'value',
    name: '利差(BP)',
    axisLine: {
      show: false
    },
    axisTick: {
      show: true
    },
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    }
  },
  dataset: {},
  series: []
};

export default industorySpreadOption;
