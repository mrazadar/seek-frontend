/*
 *
 * SignIn reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SIGN_IN_USER,
  SIGN_IN_USER_SUCCESS,
  SIGN_IN_USER_ERROR,
} from './constants';

const initialState = fromJS({
  user: null,
  userSignInSuccess: false,
  userSignInError: false,
});

function signInReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_USER:
      return state
      .set('user', null)
      .set('userSignInSuccess', false)
      .set('userSignInError', false);
    case SIGN_IN_USER_SUCCESS:
      return state
      .set('user', action.data)
      .set('userSignInSuccess', true);
    case SIGN_IN_USER_ERROR:
      return state
      .set('userSignInError', action.error);
    default:
      return state;
  }
}

export default signInReducer;
