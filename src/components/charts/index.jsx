/*
 * Charts
 *
 * echarts图标
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 全局引用 echarts
import ReactEcharts from 'echarts-for-react';

// 引入 ReactEchartsCore （可以避免全局引用 echarts）
// import ReactEchartsCore from 'echarts-for-react/lib/core';

// 引入 echarts 中需要使用的部分
// import echarts from 'echarts/lib/echarts';
// import 'echarts/lib/chart/bar';
// import 'echarts/lib/chart/line';
// import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/title';

import getDefaultOption from './config/defaultOption';

import './charts.scss';

class PackagedECharts extends Component {
  render() {
    const {
      chartRef,
      option = getDefaultOption(),
      style,
      className,
      notMerge = false, // 可选，是否不跟之前设置的option进行合并，默认为false，即合并
      lazyUpdate = false, // 可选，在设置完option后是否不立即更新图表，默认为false，即立即更新。
      theme = '', // 全局主题样式，参见(http://echarts.baidu.com/tutorial.html#ECharts%20%E4%B8%AD%E7%9A%84%E6%A0%B7%E5%BC%8F%E7%AE%80%E4%BB%8B)
      onChartReady,
      loadingOption,
      showLoading,
      onEvents = {
        click: null,
        dblclick: null,
        mousedown: null,
        mousemove: null,
        mouseup: null,
        mouseover: null,
        mouseout: null,
        legendselectchanged: null, // 切换图例选中状态后的事件
        legendselected: null, // 图例选中后的事件
        legendunselected: null, // 图例取消选中后的事件
        legendscroll: null, // 图例滚动事件
        datazoom: null, // 数据区域缩放后的事件
        datarangeselected: null, // 视觉映射组件中，range 值改变后触发的事件
        restore: null // 重置 option 事件
        // 其他事件请参考 ECharts events API (http://echarts.baidu.com/api.html#events)
      },
      opts = {
        devicePixelRatio: window.devicePixelRatio, // 屏幕分辨率
        renderer: 'canvas', // 渲染器，支持'canvas'或'svg'
        width: 'auto', // 显式指定实例宽度，单位为像素。如果传入值为 null/undefined/'auto'，则表示自动取 dom（实例容器）的宽度
        height: 'auto' // 同上
      },
      ...restProps
    } = this.props;
    console.log(option);
    return (
      <ReactEcharts
        ref={chartRef}
        option={option}
        // echarts={echarts}
        notMerge={notMerge}
        lazyUpdate={lazyUpdate}
        theme={theme}
        onChartReady={onChartReady}
        onEvents={onEvents}
        opts={opts}
        style={style}
        className={className}
        {...restProps}
      />
    );
  }
}

const objOrArrChecker = PropTypes.oneOfType([
  PropTypes.object,
  PropTypes.array
]);

const baseSeriesItemChecker = PropTypes.shape({
  type: PropTypes.oneOf([
    'line',
    'bar',
    'pie',
    'scatter',
    'effectScatter',
    'radar',
    'tree',
    'treemap',
    'sunburst',
    'boxplot',
    'candlestick',
    'heatmap',
    'map',
    'parallel',
    'lines',
    'graph',
    'sankey',
    'funnel',
    'gauge',
    'pictorialBar',
    'themeRiver',
    'custom'
  ]),
  id: PropTypes.string,
  name: PropTypes.string
});

PackagedECharts.propTypes = {
  chartRef: PropTypes.object,
  option: PropTypes.shape({
    title: objOrArrChecker,
    legend: objOrArrChecker,
    grid: objOrArrChecker,
    xAxis: objOrArrChecker,
    yAxis: objOrArrChecker,
    series: PropTypes.arrayOf(baseSeriesItemChecker)
  }),
  style: PropTypes.object,
  className: PropTypes.string,
  notMerge: PropTypes.bool,
  lazyUpdate: PropTypes.bool,
  theme: PropTypes.string,
  onChartReady: PropTypes.func,
  loadingOption: PropTypes.object,
  showLoading: PropTypes.bool,
  onEvents: PropTypes.object,
  opts: PropTypes.shape({
    devicePixelRatio: PropTypes.number,
    renderer: PropTypes.string,
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  })
};

export default PackagedECharts;
