import {
  takeEvery,
  put,
  call,
} from 'redux-saga/effects';

import { gotAuth, rejectedAuth } from '../actions';
import * as actionTypes from '../constants';
import api from '../../api/api';

function* registrationSaga({ payload }) {
  try {
    const { data } = yield call(api.post, '/auth/signup', payload);
    if (data?.token) {
      localStorage.setItem('token', data.token);
    }

    yield put(gotAuth(data));
  } catch ({ response }) {
    yield put(rejectedAuth(response.data.message));
  }
}

export default function* watcherSaga() {
  yield takeEvery(actionTypes.AUTH_REQUESTED, registrationSaga);
}
