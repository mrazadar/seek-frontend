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
  (substate) => substate.get('ads')
);


const makeSelectFetchAdsSuccess = () => createSelector(
  selectAdsDomain,
  (substate) => substate.get('fetchAdsSuccess')
);


const makeSelectFetchAdsError = () => createSelector(
  selectAdsDomain,
  (substate) => substate.get('fetchAdsError')
);

export {
  selectAdsDomain,
  makeSelectAds,
  makeSelectFetchAdsSuccess,
  makeSelectFetchAdsError,
};
