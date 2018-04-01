/*
 *
 * Ads reducer
 *
 */

import { fromJS } from 'immutable';

import {
  FETCH_ADS,
  FETCH_ADS_SUCCESS,
  FETCH_ADS_ERROR,
} from './constants';

const initialState = fromJS({
  ads: null,
  fetchAdsSuccess: false,
  fetchAdsError: false,
});

function adsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ADS:
      return state
      .set('ads', null)
      .set('fetchAdsSuccess', false)
      .set('fetchAdsError', false);
    case FETCH_ADS_SUCCESS:
      return state
      .set('ads', action.data)
      .set('fetchAdsSuccess', true);
    case FETCH_ADS_ERROR:
      return state
      .set('fetchAdsError', action.error);
    default:
      return state;
  }
}

export default adsReducer;
