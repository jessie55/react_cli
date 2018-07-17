import { all, call, put, takeLatest } from 'redux-saga/effects';
import request from 'helpers/service';
import { ActionTypes as types, urls } from 'constants/index';

export function* getIndustrySpreadChartData() {
  try {
    const response = yield call(request, urls.INDUSTRY_SPREAD_CHART);
    yield put({
      type: types.INDUSTRY_SPREAD_CHART.SUCCESS,
      payload: response
    });
  } catch (err) {
    yield put({
      type: types.INDUSTRY_SPREAD_CHART.FAILURE,
      payload: err
    });
  }
}

export default function* root() {
  yield all([
    takeLatest(types.INDUSTRY_SPREAD_CHART.REQUEST, getIndustrySpreadChartData)
  ]);
}
