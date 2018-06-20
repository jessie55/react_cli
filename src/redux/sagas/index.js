import { all } from 'redux-saga/effects';
import demoSaga from './demoSaga';

export default function* rootSaga() {
  yield all([
    demoSaga()
  ]);
}
