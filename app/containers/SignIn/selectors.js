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
  (substate) => {
    let user = substate.get('user');
    if (user && user.size) {
      user = Array.from(user).reduce((myObj, [key, value]) => (
        Object.assign(myObj, { [key]: value }) // Be careful! Maps can have non-String keys; object literals can't.
      ), {});
    }
    return user;
  }
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
