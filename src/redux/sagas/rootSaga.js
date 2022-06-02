import { all, call } from 'redux-saga/effects';

import newsSaga from './newsSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';

export default function* rootSaga() {
  yield all([
    call(newsSaga),
    call(registrationSaga),
    call(userSaga),
  ]);
}
