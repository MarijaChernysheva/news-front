import {
  takeEvery,
  put,
} from 'redux-saga/effects';

import { gotUser, rejectedUserNews } from '../actions';
import * as actionTypes from '../constants';
import api from '../../api/api';

function* getUserSaga({ payload: id }) {
  try {
    const url = id === 'profile'
      ? '/users'
      : `/users/${id}`;
    const { data: payload } = yield api.get(`${url}`);
    yield put(gotUser(payload));
  } catch (err) {
    yield put(rejectedUserNews(err.message));
  }
}

export default function* watcherSaga() {
  yield takeEvery(actionTypes.USER_REQUESTED, getUserSaga);
}
