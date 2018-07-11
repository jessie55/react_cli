import { all, call, put, takeLatest } from 'redux-saga/effects';
import request from 'helpers/service';
import { ActionTypes as types, urls } from 'constants/index';

export function* getAllData() {
  try {
    const response = yield call(request, urls.GET_MOCK2);
    yield put({
      type: types.REQUEST_DEMO.SUCCESS,
      payload: { data: response }
    });
  } catch (err) {
    yield put({
      type: types.REQUEST_DEMO.FAILURE,
      payload: err
    });
  }
}

export function* getMock3() {
  try {
    const response = yield call(request, urls.GET_MOCK3);
    yield put({
      type: types.REQUEST_DEMO3.SUCCESS,
      payload: { data: response }
    });
  } catch (err) {
    yield put({
      type: types.REQUEST_DEMO3.FAILURE,
      payload: err
    });
  }
}

export default function* root() {
  yield all([
    takeLatest(types.REQUEST_DEMO.REQUEST, getAllData),
    takeLatest(types.REQUEST_DEMO3.REQUEST, getMock3)
  ]);
}
