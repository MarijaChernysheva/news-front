import {
  takeEvery,
  put,
} from 'redux-saga/effects';

import { gotLogin, rejectedLogin } from '../actions';
import * as actionTypes from '../constants';
import api from '../../api/api';

function* getLoginSaga({ payload }) {
  try {
    const { data } = yield api.post('/auth/login', payload);
    if (data.error) {
      throw new Error(data.error);
    }
    if (data.token) {
      localStorage.setItem('token', data.token);
    }
    yield put(gotLogin(data));
  } catch (err) {
    yield put(rejectedLogin(err.message));
  }
}

export default function* watcherSaga() {
  yield takeEvery(actionTypes.LOGIN_REQUESTED, getLoginSaga);
}
