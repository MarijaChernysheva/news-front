import {
  takeEvery,
  put,
} from 'redux-saga/effects';

import { gotLogin, rejectedLogin } from '../actions';
import * as actionTypes from '../constants';
import api from '../../api/api';

function* loginSaga({ payload }) {
  try {
    const { data } = yield api.post('/auth/login', payload);
    if (data.token) {
      localStorage.setItem('token', data.token);
    }
    yield put(gotLogin(data));
  } catch ({ response }) {
    yield put(rejectedLogin(response.data.message));
  }
}

export default function* watcherSaga() {
  yield takeEvery(actionTypes.LOGIN_REQUESTED, loginSaga);
}
