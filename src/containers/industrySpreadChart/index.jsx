import React, { Component } from 'react';
// import PackagedECharts from 'components/charts';
import ReactEcharts from 'echarts-for-react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'antd';

import { getIndustrySpread, clearIndustrySpread } from 'actions/industrySpreadChart';

class MyIndustrySpreadChart extends Component {
  constructor(props) {
    super(props);
    this.industrySpreadChart = null;
    this.industrySpreadChart2 = null;
    this.industrySpreadChart3 = null;
  }

  componentDidMount = () => {
    // this.getIndustrySpread();
  }

  getIndustrySpread = (filter) => {
    this.props.getIndustrySpread(filter);
  }

  clearData = () => {
    this.props.clearIndustrySpread();
  }

  render() {
    const {
      chartOption,
      chartOption2,
      chartOption3
    } = this.props.industrySpreadChart;
    return (
      <div style={{ padding: 10 }}>
        {!(chartOption && chartOption.dataset) && <Button type="primary" onClick={this.getIndustrySpread}>load data</Button>}
        {chartOption && chartOption.dataset && <Button type="primary" onClick={this.clearData}>clear data</Button>}
        <ReactEcharts
          ref={e => { this.industrySpreadChart = e; }}
          notMerge
          // showLoading
          option={chartOption}
          style={{ height: '350px', width: '100%' }}
          className="react_for_echarts0"
        />

        <ReactEcharts
          ref={e => { this.industrySpreadChart2 = e; }}
          notMerge
          // showLoading
          option={chartOption2}
          style={{ height: '350px', width: '100%' }}
          className="react_for_echarts0"
        />

        <ReactEcharts
          ref={e => { this.industrySpreadChart3 = e; }}
          notMerge
          // showLoading
          option={chartOption3}
          style={{ height: '350px', width: '100%' }}
          className="react_for_echarts0"
        />
      </div>
    );
  }
}

const enhance = compose(
  connect(state => ({
    industrySpreadChart: state.industrySpreadChart
  }), {
    getIndustrySpread,
    clearIndustrySpread
  })
);

export default enhance(MyIndustrySpreadChart);
