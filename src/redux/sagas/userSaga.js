import {
  takeEvery,
  put,
  call,
} from 'redux-saga/effects';

import {
  gotUser, rejectedUserNews,
  gotLogin, rejectedLogin,
  updateUser, rejectedUser,
} from '../actions';
import * as actionTypes from '../constants';
import api from '../../api/api';

function* getUserSaga({ payload: id }) {
  try {
    const url = id === 'profile'
      ? '/users'
      : `/users/${id}`;
    const { data: payload } = yield call(api.get, url);
    yield put(gotUser(payload));
  } catch (err) {
    yield put(rejectedUserNews(err.message));
  }
}

function* loginSaga({ payload }) {
  try {
    const { data } = yield call(api.post, '/auth/login', payload);
    if (data.token) {
      localStorage.setItem('token', data.token);
    }
    yield put(gotLogin(data));
  } catch ({ response }) {
    yield put(rejectedLogin(response.data.message));
  }
}

function* editUserSaga({ payload, file }) {
  try {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('login', payload);
    const { data } = yield call(
      api.patch,
      '/users',
      formData,
      { headers: { 'content-type': 'multipart/form-data' } },
    );
    yield put(updateUser(data));
  } catch ({ err }) {
    yield put(rejectedUser(err.message));
  }
}

export default function* watcherSaga() {
  yield takeEvery(actionTypes.EDIT_USER_REQUESTED, editUserSaga);
  yield takeEvery(actionTypes.USER_REQUESTED, getUserSaga);
  yield takeEvery(actionTypes.LOGIN_REQUESTED, loginSaga);
}
