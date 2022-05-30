import { all, call } from 'redux-saga/effects';

import newsSaga from './newsSaga';
import registrationSaga from './registrationSaga';
import loginSaga from './loginSaga';
import userSaga from './userSaga';
import editUserSaga from './editUserSaga';

export default function* rootSaga() {
  yield all([
    call(newsSaga),
    call(registrationSaga),
    call(loginSaga),
    call(userSaga),
    call(editUserSaga),
  ]);
}
