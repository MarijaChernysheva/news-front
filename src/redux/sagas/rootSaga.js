import { all, call } from 'redux-saga/effects';

import newsSaga from './newsSaga';
import registrationSaga from './registrationSaga';
import loginSaga from './loginSaga';

export default function* rootSaga() {
  yield all([
    call(newsSaga),
    call(registrationSaga),
    call(loginSaga),
  ]);
}
