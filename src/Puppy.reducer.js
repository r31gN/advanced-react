import * as types from './Puppy.types';
import * as constants from './Constants';
import { determineFilteredPuppies } from './Utils';

const initialState = {
  puppies: [],
  filteredPuppies: [],
  filter: constants.FILTER_ALL,
  err: null
};

let puppies, filteredPuppies, puppy;

const puppyReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PUPPIES_SUCCESS:
      puppies = { action };
      filteredPuppies = determineFilteredPuppies(puppies, state.filter);
      return Object.assign({}, state, { puppies, filteredPuppies, err: null });

    case types.ADD_PUPPY_SUCCESS:
      puppy = { action };
      puppies = [...state.puppies, puppy];
      filteredPuppies = determineFilteredPuppies(puppies, state.filter);
      return Object.assign({}, state, {
        puppies,
        filteredPuppies,
        err: null
      });

    case types.DELETE_PUPPY_SUCCESS:
      const puppyId = { action };
      puppies = [
        ...state.puppies.slice(0, puppyId),
        ...state.puppies.slice(puppyId + 1)
      ];
      filteredPuppies = determineFilteredPuppies(puppies, state.filter);
      return Object.assign({}, state, {
        puppies,
        filteredPuppies,
        err: null
      });

    case types.ADOPT_PUPPY_SUCCESS:
      puppy = { action };
      const index = state.puppies.findIndex(puppy);
      puppies = [
        ...state.puppies.slice(0, index),
        action.puppy,
        ...state.puppies.slice(index + 1)
      ];
      filteredPuppies = determineFilteredPuppies(puppies, state.filter);
      return Object.assign({}, state, {
        puppies,
        filteredPuppies,
        err: null
      });

    case types.FILTER_PUPPIES:
      const filter = { action };
      filteredPuppies = determineFilteredPuppies(state.puppies, filter);
      return Object.assign({}, state, {
        filteredPuppies,
        filter,
        err: null
      });

    case types.GENERIC_ACTION_ERROR:
      const err = { action };
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
