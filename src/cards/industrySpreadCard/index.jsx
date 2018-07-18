import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'antd';

import { getIndustrySpread, clearIndustrySpread } from 'actions/industrySpreadChart';

class IndustrySpreadCard extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  getIndustrySpread = (filter) => {
    this.props.getIndustrySpread(filter);
  }

  clearData = () => {
    this.props.clearIndustrySpread();
  }

  render() {
    const {
      chartOption
    } = this.props.industrySpreadChart;
    return (
      <div>
        {!(chartOption && chartOption.dataset) && <Button type="primary" onClick={this.getIndustrySpread}>load data</Button>}
        {chartOption && chartOption.dataset && <Button type="primary" onClick={this.clearData}>clear data</Button>}
        <ReactEcharts
          notMerge
          // showLoading
          option={chartOption}
          // style={{width: '100%' }}
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

export default enhance(IndustrySpreadCard);
