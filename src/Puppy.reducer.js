import * as types from './Puppy.types';
import * as constants from './Constants';
import { determineFilteredPuppies } from './Utils';

const initialState = {
  puppies: [],
  filteredPuppies: [],
  filter: constants.FILTER_ALL,
  err: null
};

let puppies, filteredPuppies;

const puppyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PUPPIES_SUCCESS:
      puppies = action.puppies;
      filteredPuppies = determineFilteredPuppies(puppies, state.filter);
      return Object.assign({}, state, { puppies, filteredPuppies, err: null });

    case types.FILTER_PUPPIES:
      const filter = action.filter;
      filteredPuppies = determineFilteredPuppies(state.puppies, filter);
      return Object.assign({}, state, {
        filteredPuppies,
        filter,
        err: null
      });

    case types.GENERIC_ACTION_ERROR:
      const err = action.err;
      return Object.assign({}, state, {
        puppies: [],
        filteredPuppies: [],
        err
      });

    default:
      return state;
  }
};

export default puppyReducer;
