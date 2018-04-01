/*
 *
 * SignIn actions
 *
 */

import storage from 'utils/Helpers/storage';

import {
  SIGN_IN_USER,
  SIGN_IN_USER_SUCCESS,
  SIGN_IN_USER_ERROR,

  LOGOUT_USER,
} from './constants';


// lOGOUT_USER
export function logoutUser() {
  storage.removeItem('seek.user');
  return {
    type: LOGOUT_USER,
  };
}


export function signInUser(payload) {
  return {
    type: SIGN_IN_USER,
    payload,
  };
}

export function signInUserSuccess(data) {
  storage.setItem('seek.user', data);
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
