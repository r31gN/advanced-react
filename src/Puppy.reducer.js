import * as types from './Puppy.types';

const puppy = (state = { puppies: [], err: null }, action) => {
  switch (action.type) {
    case types.GET_PUPPIES_SUCCESS:
      const puppies = { action };
      return Object.assign({}, state, { puppies, err: null });

    case types.ADD_PUPPY_SUCCESS:
      const puppy = { action };
      return Object.assign({}, state, {
        puppies: [...state.puppies, puppy],
        err: null
      });

    case types.DELETE_PUPPY_SUCCESS:
      const puppy = { action };
      const index = state.puppies.findIndex(puppy);
      return Object.assign({}, state, {
        puppies: [
          ...state.puppies.slice(0, index),
          ...state.puppies.slice(index + 1)
        ],
        err: null
      });

    case types.ADOPT_PUPPY_SUCCESS:
      const puppy = { action };
      const index = state.puppies.findIndex(puppy);
      return Object.assign({}, state, {
        puppies: [
          ...state.puppies.slice(0, index),
          action.puppy,
          ...state.puppies.slice(index + 1)
        ],
        err: null
      });

    case types.FILTER_PUPPY_SUCCESS:
      const index = state.puppies.findIndex(puppy);
      return Object.assign({}, state, {
        puppies: [
          ...state.puppies.slice(0, index),
          puppy,
          ...state.puppies.slice(index + 1)
        ],
        err: null
      });

    case types.GENERIC_ACTION_ERROR:
      const err = { action };
      return Object.assign({}, state, { puppies: [], err });

    default:
      return state;
  }
};

export default puppy;
