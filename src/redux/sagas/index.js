import { all } from 'redux-saga/effects';
import demoSaga from './mockDemoSaga';
import industrySpreadChartSaga from './industrySpreadChartSaga';

export default function* rootSaga() {
  yield all([
    demoSaga(),
    industrySpreadChartSaga()
  ]);
}
