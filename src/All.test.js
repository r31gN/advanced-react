import * as constants from './Constants';
import * as actions from './Puppy.actions';
import * as types from './Puppy.types';
import reducer from './Puppy.reducer';

describe('Reducers tests', () => {
  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      puppies: [],
      filteredPuppies: [],
      filter: constants.FILTER_ALL,
      err: null
    });
  });

  it('Should handle changing state when new puppies come in', () => {
    const state = {
      puppies: [{ name: 'Reign', type: 'Beast', adopted: false }],
      filteredPuppies: [{ name: 'Reign', type: 'Beast', adopted: false }],
      filter: constants.FILTER_ALL,
      err: null
    };
    expect(
      reducer(undefined, {
        type: types.GET_PUPPIES_SUCCESS,
        puppies: state.puppies
      })
    ).toEqual(state);

    const alteredState = {
      puppies: [
        { name: 'Reign', type: 'Beast', adopted: false },
        { name: 'Reign_2', type: 'Beast_2', adopted: false }
      ],
      filteredPuppies: [
        { name: 'Reign', type: 'Beast', adopted: false },
        { name: 'Reign_2', type: 'Beast_2', adopted: false }
      ],
      filter: constants.FILTER_ALL,
      err: null
    };
    expect(
      reducer(undefined, {
        type: types.GET_PUPPIES_SUCCESS,
        puppies: alteredState.puppies
      })
    ).toEqual(alteredState);
  });

  it('Should handle changing state when a new filter is selected', () => {
    const state = {
      puppies: [
        { name: 'Reign', type: 'Beast', adopted: false },
        { name: 'Reign_2', type: 'Beast_2', adopted: false },
        { name: 'Reign_3', type: 'Beast_3', adopted: true }
      ]
    };
    const expectedState = {
      puppies: [
        { name: 'Reign', type: 'Beast', adopted: false },
        { name: 'Reign_2', type: 'Beast_2', adopted: false },
        { name: 'Reign_3', type: 'Beast_3', adopted: true }
      ],
      filteredPuppies: [{ name: 'Reign_3', type: 'Beast_3', adopted: true }],
      filter: constants.FILTER_ADOPTED,
      err: null
    };
    expect(
      reducer(state, {
        type: types.FILTER_PUPPIES,
        filter: constants.FILTER_ADOPTED
      })
    ).toEqual(expectedState);
  });

  it('Should handle changing state when an error happens', () => {
    const state = {
      filter: constants.FILTER_ALL
    };
    const err = new Error('Some generic error.');
    const expectedState = {
      puppies: [],
      filteredPuppies: [],
      filter: constants.FILTER_ALL,
      err
    };
    expect(
      reducer(state, {
        type: types.GENERIC_ACTION_ERROR,
        err
      })
    ).toEqual(expectedState);
  });
});
