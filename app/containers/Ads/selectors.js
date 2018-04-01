import { createSelector } from 'reselect';

/**
 * Direct selector to the ads state domain
 */
const selectAdsDomain = (state) => state.get('ads');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Ads
 */

const makeSelectAds = () => createSelector(
  selectAdsDomain,
  (substate) => substate.toJS()
);

export default makeSelectAds;
export {
  selectAdsDomain,
};
