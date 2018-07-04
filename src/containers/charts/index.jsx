import React, { PureComponent } from 'react';
import PackagedECharts from 'components/charts';
import ReactEcharts from 'echarts-for-react';
import SimpleLineChart from 'components/charts/lib/simple-line-chart';

export default class Charts extends PureComponent {
  constructor() {
    super();
    this.ref0 = React.createRef();
    this.ref1 = React.createRef();
    this.ref2 = React.createRef();
  }

  getOption = () => ({
    title: {
      text: '堆叠区域图'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['xx', 'xxx', 'xxxx']
    },
    toolbox: {
      show: true,
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        areaStyle: { normal: {} },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '联盟广告',
        type: 'line',
        stack: '总量',
        areaStyle: { normal: {} },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '视频广告',
        type: 'line',
        stack: '总量',
        areaStyle: { normal: {} },
        data: [150, 232, 201, 154, 190, 330, 410]
      }
    ]
  })
  getProps = () => ({
    chartRef: this.ref2,
    hasTooltip: true,
    hasToolbox: true,
    hasLegend: true,
    titleText: '主标题',
    subTitleText: '副标题',
    data: [
      ['product', '2015', '2016', '2017'],
      ['Matcha Latte', 43.3, 85.8, 93.7],
      ['Milk Tea', 83.1, 73.4, 55.1],
      ['Cheese Cocoa', 86.4, 65.2, 82.5],
      ['Walnut Brownie', 72.4, 53.9, 39.1]
    ],
    seriesLayoutBy: 'column'
  })

  getAllInstance = () => {
    console.log(this.ref0, this.ref1, this.ref2); // eslint-disable-line    
    const instance0 = this.ref0.current.getEchartsInstance();
    const instance1 = this.ref1.current.getEchartsInstance();
    const instance2 = this.ref2.current.getEchartsInstance();
    console.log(instance0, instance1, instance2); // eslint-disable-line
  }

  render() {
    return (
      <div className="examples">
        <div className="parent">
          <span>直接使用 ReactEcharts</span>
          <ReactEcharts
            ref={this.ref0}
            option={this.getOption()}
            style={{ height: '350px', width: '50%' }}
            className="react_for_echarts0"
          />
        </div>
        <div className="parent">
          <span>使用封装的 PackagedECharts</span>
          <PackagedECharts
            chartRef={this.ref1}
            option={this.getOption()}
            style={{ height: '300px', width: '80%' }}
            className="react_for_echarts1"
          />
        </div>
        <div className="parent">
          <span>使用封装的 SimpleLineChart</span>
          <SimpleLineChart
            chartRef={this.ref2}
            {...this.getProps()}
            style={{ height: '350px', width: '90%' }}
            className="react_for_echarts2"
          />
        </div>
        <button onClick={this.getAllInstance} > 获取 chart 实例 </button>
      </div>
    );
  }
}
