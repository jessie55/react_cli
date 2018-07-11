import { all } from 'redux-saga/effects';
import demoSaga from './mockDemoSaga';

export default function* rootSaga() {
  yield all([
    demoSaga()
  ]);
}
