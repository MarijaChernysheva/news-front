import {
  takeEvery,
  put,
} from 'redux-saga/effects';

import { gotUserNews, getUserNewsRejected } from '../actions';
import * as actionTypes from '../constants';
import api from '../../api/api';

function* getUserNewsSaga({ payload: id }) {
  try {
    const { data: payload } = yield api.get(`/users/${id}`);
    yield put(gotUserNews(payload));
  } catch (err) {
    yield put(getUserNewsRejected(err.message));
  }
}

export default function* watcherSaga() {
  yield takeEvery(actionTypes.USER_NEWS_REQUESTED, getUserNewsSaga);
}
