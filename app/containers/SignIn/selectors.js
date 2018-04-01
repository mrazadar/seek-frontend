import { createSelector } from 'reselect';

/**
 * Direct selector to the signIn state domain
 */
const selectSignIn = (state) => state.get('signIn');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SignIn
 */

const makeSelectUser = () => createSelector(
  selectSignIn,
  (substate) => substate.get('user')
);

const makeSelectSignInSuccess = () => createSelector(
  selectSignIn,
  (substate) => substate.get('signInSuccess')
);

const makeSelectSignInError = () => createSelector(
  selectSignIn,
  (substate) => substate.get('signInError')
);


export {
  selectSignIn,
  makeSelectUser,
  makeSelectSignInSuccess,
  makeSelectSignInError,
};
