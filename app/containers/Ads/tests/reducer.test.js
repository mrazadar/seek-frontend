
import { fromJS } from 'immutable';
import adsReducer from '../reducer';

describe('adsReducer', () => {
  it('returns the initial state', () => {
    expect(adsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
