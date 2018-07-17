import { noDataOption } from 'components/charts/config';
import { ActionTypes as types } from 'constants';
import transformToOption from './transformToOption';
import transformToOption2 from './transformToOption2';

const chartOption = { ...noDataOption };
const chartOption2 = { ...noDataOption };
const chartOption3 = { ...noDataOption };

// reducer
const initialState = {
  chartOption,
  chartOption2,
  chartOption3
};

const industrySpreadChartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INDUSTRY_SPREAD_CHART.SUCCESS:
      return {
        ...state,
        chartOption: transformToOption(action.payload),
        chartOption2: transformToOption2(action.payload),
        chartOption3
      };
    case types.INDUSTRY_SPREAD_CHART.FAILURE:
    case types.CLEAR_INDUSTRY_SPREAD_CHART:
      return {
        ...state,
        chartOption,
        chartOption2,
        chartOption3
      };
    default:
      return state;
  }
};

export default industrySpreadChartReducer;
