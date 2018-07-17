import { ActionTypes as types } from 'constants/index';

export function getIndustrySpread(data) {
  return {
    type: types.INDUSTRY_SPREAD_CHART.REQUEST,
    payload: data
  };
}

export function clearIndustrySpread(data) {
  return {
    type: types.CLEAR_INDUSTRY_SPREAD_CHART,
    payload: data
  };
}
