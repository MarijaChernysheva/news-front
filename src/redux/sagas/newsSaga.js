import {
  takeEvery,
  put,
  call,
} from 'redux-saga/effects';

import {
  gotNews,
  getRejected,
  rejectedUserNews,
  getUser,
} from '../actions';
import * as actionTypes from '../constants';
import api from '../../api/api';

const OK = 200;

function* getNewsSaga() {
  try {
    const { data: payload } = yield api.get('/news');
    yield put(gotNews(payload));
  } catch (err) {
    yield put(getRejected(err.message));
  }
}

function* addNewsUserSaga({ payload, file }) {
  try {
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('image', file);
    formData.append('title', payload.title);
    formData.append('text', payload.text);
    formData.append('tag', payload.tag);
    const data = yield call(
      api.post,
      '/news',
      formData,
      { headers: { authorization: token } },
    );
    if (data.status === OK) {
      yield put(getUser('profile'));
    }
  } catch ({ err }) {
    yield put(rejectedUserNews(err));
  }
}

export default function* watcherSaga() {
  yield takeEvery(actionTypes.NEWS_REQUESTED, getNewsSaga);
  yield takeEvery(actionTypes.USER_NEWS_REQUESTED, addNewsUserSaga);
}
