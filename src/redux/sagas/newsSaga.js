import {
  takeEvery,
  put,
} from 'redux-saga/effects';

import { gotNews, getRejected } from '../actions';
import * as actionTypes from '../constants';
import api from '../../api/api';

function* getNewsSaga() {
  try {
    const { data: payload } = yield api.get('/news');
    yield put(gotNews(payload));
  } catch (err) {
    yield put(getRejected(err.message));
  }
}

export default function* watcherSaga() {
  yield takeEvery(actionTypes.NEWS_REQUESTED, getNewsSaga);
}
