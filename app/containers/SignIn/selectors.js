import { createSelector } from 'reselect';

/**
 * Direct selector to the signIn state domain
 */
const selectSignIn = (state) => state.get('signin');

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

const makeSelectUserSignInSuccess = () => createSelector(
  selectSignIn,
  (substate) => substate.get('userSignInSuccess')
);

const makeSelectUserSignInError = () => createSelector(
  selectSignIn,
  (substate) => substate.get('userSignInError')
);


export {
  selectSignIn,
  makeSelectUser,
  makeSelectUserSignInSuccess,
  makeSelectUserSignInError,
};
