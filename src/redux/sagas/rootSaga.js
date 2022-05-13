import { all, call } from 'redux-saga/effects';

import newsSaga from './newsSaga';
import authSaga from './authSaga';
import loginSaga from './loginSaga';

export default function* rootSaga() {
  yield all([
    call(newsSaga),
    call(authSaga),
    call(loginSaga),
  ]);
}
