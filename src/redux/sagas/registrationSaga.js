import {
  takeEvery,
  put,
} from 'redux-saga/effects';

import { gotAuth, rejectedAuth, sendLogin } from '../actions';
import * as actionTypes from '../constants';
import api from '../../api/api';

function* registrationSaga({ payload }) {
  try {
    const { data } = yield api.post('/auth/signup', payload);
    if (data.error) {
      throw new Error(data.error);
    }
    yield put(gotAuth(data));
    yield put(sendLogin(payload));
  } catch (err) {
    yield put(rejectedAuth(err.message));
  }
}

export default function* watcherSaga() {
  yield takeEvery(actionTypes.AUTH_REQUESTED, registrationSaga);
}
