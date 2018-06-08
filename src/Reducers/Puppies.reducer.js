import * as types from '../Types/Puppies.types';

let index;

const puppies = (state = [], action) => {
  switch (action.type) {
    case types.CREATE_PUPPY_SUCCESS:
      return [...state, action.payload.puppy];

    case types.READ_PUPPIES_SUCCESS:
      return action.payload.puppies;

    case types.UPDATE_PUPPY_SUCCESS:
      index = state.findIndex(puppy => puppy.id === action.payload.puppy.id);
      return [
        ...state.slice(0, index),
        action.payload.puppy,
        ...state.slice(index + 1)
      ];

    case types.DELETE_PUPPY_SUCCESS:
      index = state.findIndex(puppy => puppy.id === action.payload.puppyId);
      return [...state.slice(0, index), ...state.slice(index + 1)];

    default:
      return state;
  }
};

export default puppies;
