import { createSelector } from 'reselect';

/**
 * Direct selector to the advertisements state domain
 */
const selectAdvertisementsDomain = (state) => state.get('advertisements');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Advertisements
 */

const makeSelectAdvertisements = () => createSelector(
  selectAdvertisementsDomain,
  (substate) => substate.toJS()
);

export default makeSelectAdvertisements;
export {
  selectAdvertisementsDomain,
};
