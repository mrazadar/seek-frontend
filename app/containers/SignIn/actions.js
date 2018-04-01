/*
 *
 * SignIn actions
 *
 */

import {
  SIGN_IN_USER,
  SIGN_IN_USER_SUCCESS,
  SIGN_IN_USER_ERROR,
} from './constants';

export function signInUser(payload) {
  return {
    type: SIGN_IN_USER,
    payload,
  };
}

export function signInUserSuccess(data) {
  return {
    type: SIGN_IN_USER_SUCCESS,
    data,
  };
}

export function signInUserError(error) {
  return {
    type: SIGN_IN_USER_ERROR,
    error,
  };
}
