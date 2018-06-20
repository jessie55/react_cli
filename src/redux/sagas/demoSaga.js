import { all, call, put, takeLatest } from 'redux-saga/effects';
import request from 'helpers/client';
import { ActionTypes as types, urls } from 'constants/index';

export function* getAllData() {
  try {
    const response = yield call(request, urls.GET_ALL_DATA);
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

export default function* root() {
  yield all([
    takeLatest(types.REQUEST_DEMO.REQUEST, getAllData)
  ]);
}
