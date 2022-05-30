import {
  takeEvery,
  put,
} from 'redux-saga/effects';

import { updateUser, rejectedUser, getUser } from '../actions';
import * as actionTypes from '../constants';
import api from '../../api/api';

function* editUserSaga({ payload, file }) {
  try {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('login', payload);
    yield api.patch(
      '/users',
      formData,
      { headers: { 'content-type': 'multipart/form-data' } },
    );
    yield put(updateUser());
    yield put(getUser());
  } catch ({ err }) {
    yield put(rejectedUser(err.message));
  }
}

export default function* watcherSaga() {
  yield takeEvery(actionTypes.EDIT_USER_REQUESTED, editUserSaga);
}
