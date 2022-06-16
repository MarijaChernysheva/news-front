import {
  takeEvery,
  put,
  // takeLatest,
  call,
} from 'redux-saga/effects';

import {
  gotNews,
  getRejected,
  refuseUserNews,
  getUser,
  // takeUserNews,
} from '../actions';
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

function* addNewsUserSaga({ payload }) {
  try {
    const token = localStorage.getItem('token');
    // const formData = new FormData();
    // formData.append('file', file);
    // formData.append('title', title);
    // formData.append('text', text);
    // formData.append('tag', tag);
    const data = yield call(
      api.post,
      '/news',
      payload,
      // formData,
      { headers: { authorization: token } },
    );
    if (data.status === 200) {
      yield put(getUser('profile'));
    }
  } catch ({ err }) {
    yield put(refuseUserNews(err));
  }
}

export default function* watcherSaga() {
  yield takeEvery(actionTypes.NEWS_REQUESTED, getNewsSaga);
  yield takeEvery(actionTypes.USER_NEWS_REQUESTED, addNewsUserSaga);
}
