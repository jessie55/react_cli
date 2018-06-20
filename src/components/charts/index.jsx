/*
 * Charts
 *
 * echarts图标
 */

import React, { Component } from 'react';

import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

import './charts.scss';
import data from './data';

class Charts extends Component {
  static defaultProps = {}

  componentDidMount() {
    const myChart = echarts.init(document.getElementById('main'));
    const sizeValue = '57%';
    const symbolSize = 2.5;

    myChart.setOption({
      legend: {},
      tooltip: {},
      toolbox: {
        left: 'center',
        feature: {
          dataZoom: {}
        }
      },
      grid: [
        { right: sizeValue, bottom: sizeValue },
        { left: sizeValue, bottom: sizeValue },
        { right: sizeValue, top: sizeValue },
        { left: sizeValue, top: sizeValue }
      ],
      xAxis: [
        {
          type: 'value', gridIndex: 0, name: 'Income', axisLabel: { rotate: 50, interval: 0 }
        }
      ],
      yAxis: [
        { type: 'value', gridIndex: 0, name: 'Life Expectancy' }
      ],
      dataset: {
        dimensions: [
          'Income'
        ],
        source: data
      },
      series: [
        {
          type: 'scatter',
          symbolSize: symbolSize,
          xAxisIndex: 0,
          yAxisIndex: 0,
          encode: {
            x: 'Income',
            y: 'Life Expectancy',
            tooltip: [0, 1, 2, 3, 4]
          }
        }
      ]
    });
  }

  render() {
    return (
      <div id="main" style={{ width: 400, height: 400 }} />
    );
  }
}

export default Charts;
