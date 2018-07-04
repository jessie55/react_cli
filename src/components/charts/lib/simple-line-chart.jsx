import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 引入 ReactEchartsCore （可以避免全局引用 echarts）
import ReactEchartsCore from 'echarts-for-react/lib/core';

// 引入 echarts 中需要使用的部分
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/legend';

import commonOptions from './common-options';

// import './charts.scss';

/**
 * 创建最基本的柱状图，单x轴，单y轴
 * 可以配置的内容包括：
 * 1. 标题（主标题 title: string，副标题 subtitle: string）
 * 2. 是否显示 tooltip，默认显示（hasTooltip: bool）
 * 3. 是否显示工具箱，默认显示（hasToolbox: bool）
 * 4. 图例是否显示，默认显示（hasLegend: bool）
 * 5. 数据，默认使用 ECharts 的 dataset 数组格式的数据 （data: array）
 * 6. data 映射到系列的模式 （seriesLayoutBy: 'column' or 'row'）
 * @extends Component
 */
class SimpleLineChart extends Component {
  getSeries = (data, seriesLayoutBy) => {
    const result = [];
    const item = { type: 'line', seriesLayoutBy };
    for (let i = 0; i < (seriesLayoutBy === 'column' ? data[0].length - 1 : data.length - 1); i++) {
      result.push(item);
    }
    console.log('calcuted series:', result);
    return result;
  }

  getChartOption = () => {
    const {
      titleText,
      subTitleText,
      hasTooltip = true,
      hasToolbox = false,
      hasLegend = true,
      data,
      seriesLayoutBy = 'column'
    } = this.props;
    const { toolbox, grid } = commonOptions;
    const series = this.getSeries(data, seriesLayoutBy);
    return {
      title: {
        text: titleText,
        subtext: subTitleText
      },
      tooltip: {
        trigger: hasTooltip ? 'axis' : 'none'
      },
      legend: {
        data: hasLegend ? undefined : []
      },
      xAxis: [
        {
          type: 'category'
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      dataset: {
        source: data
      },
      series,
      toolbox: {
        ...toolbox,
        show: !!hasToolbox
      },
      grid
    };
  }

  render() {
    const { chartRef, style, className } = this.props;
    const option = this.getChartOption();
    console.log('chart option:', option);
    return (
      <ReactEchartsCore
        ref={chartRef}
        option={option}
        echarts={echarts}
        style={style}
        className={className}
      />
    );
  }
}

SimpleLineChart.propTypes = {
  chartRef: PropTypes.object,
  titleText: PropTypes.string,
  subTitleText: PropTypes.string,
  hasTooltip: PropTypes.bool,
  hasToolbox: PropTypes.bool,
  hasLegend: PropTypes.bool,
  data: PropTypes.oneOfType([
    PropTypes.object, PropTypes.array
  ]),
  seriesLayoutBy: PropTypes.oneOf([
    'column', 'row'
  ])
};

export default SimpleLineChart;
