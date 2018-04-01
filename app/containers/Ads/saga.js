import { takeLatest, call, put } from 'redux-saga/effects';

import request, { fetchAds } from 'utils/request';

import { FETCH_ADS } from './constants';
import { fetchAdsSuccess, fetchAdsError } from './actions';

// FetchADs
export function* fetchAdsSaga(payload) {
  try {
    const ads = yield call(request, { method: fetchAds, payload });
    yield put(fetchAdsSuccess(ads));
  } catch (err) {
    yield put(fetchAdsError(err));
  }
}


/**
 * Root saga manages watcher lifecycle
 */
export default function* RootSagas() {
  yield takeLatest(FETCH_ADS, fetchAdsSaga);
}
