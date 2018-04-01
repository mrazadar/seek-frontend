/*
 *
 * Ads actions
 *
 */

import {
  FETCH_ADS,
  FETCH_ADS_SUCCESS,
  FETCH_ADS_ERROR,
} from './constants';

export function fetchAds() {
  return {
    type: FETCH_ADS,
  };
}

export function fetchAdsSuccess(data) {
  return {
    type: FETCH_ADS_SUCCESS,
    data,
  };
}

export function fetchAdsError(error) {
  return {
    type: FETCH_ADS_ERROR,
    error,
  };
}
