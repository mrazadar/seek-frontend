/*
 *
 * SignIn reducer
 *
 */

import { fromJS } from 'immutable';
import storage from 'utils/Helpers/storage';
import {
  SIGN_IN_USER,
  SIGN_IN_USER_SUCCESS,
  SIGN_IN_USER_ERROR,
  LOGOUT_USER,
} from './constants';


const initialState = fromJS({
  user: storage.getItem('seek.user') || null,
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

    case LOGOUT_USER:
      return state
      .set('user', null);


    default:
      return state;
  }
}

export default signInReducer;
