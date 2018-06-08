import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as constants from '../Constants/Constants';
import * as actions from '../Actions/Filter.actions';
import * as types from '../Types/Filter.types';
import reducer from '../Reducers/Filter.reducer';

describe('Filter sync actions', () => {
  it('Should create an action to filter puppies', () => {
    const filter = constants.FILTER_NOT_ADOPTED;

    const expectedAction = {
      type: types.FILTER_PUPPIES,
      payload: { filter }
    };
    expect(actions.filterPuppies(filter)).toEqual(expectedAction);
  });
});

describe('Filter reducer tests', () => {
  it('Should handle changing state when a new filter is selected', () => {
    const filter = constants.FILTER_ADOPTED;

    expect(
      reducer(undefined, {
        type: types.FILTER_PUPPIES,
        payload: { filter }
      })
    ).toEqual(filter);
  });
});
