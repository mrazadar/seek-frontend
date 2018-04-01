
import { call, put, takeLatest } from 'redux-saga/effects';

import request, { signIn } from 'utils/request';
import { SIGN_IN_USER } from './constants';

import { signInUserSuccess,
         signInUserError,
       } from './actions';


// SIGN_IN_USER
export function* signInUser(payload) {
  try {
    const user = yield call(request, { method: signIn, payload });
    yield put(signInUserSuccess(user));
  } catch (err) {
    yield put(signInUserError(err));
  }
}


/**
 * Root saga manages watcher lifecycle
 */
export default function* RootSagas() {
  yield takeLatest(SIGN_IN_USER, signInUser);
}
