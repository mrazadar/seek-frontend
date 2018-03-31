
import { fromJS } from 'immutable';
import advertisementsReducer from '../reducer';

describe('advertisementsReducer', () => {
  it('returns the initial state', () => {
    expect(advertisementsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
