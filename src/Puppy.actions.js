import * as types from './Puppy.types';
import store from 'Redux/Store';

export const getPuppies = () => {};

export const getPuppiesSuccess = puppies => ({
  type: types.GET_PUPPIES_SUCCESS,
  puppies
});

export const addPuppySuccess = puppy => ({
  type: types.ADD_PUPPY_SUCCESS,
  puppy
});

export const deletePuppySuccess = puppy => ({
  type: types.DELETE_PUPPY_SUCCESS,
  puppy
});

export const adoptPuppySuccess = puppy => ({
  type: types.ADOPT_PUPPY_SUCCESS,
  puppy
});

export const genericActionError = err => ({
  type: types.GENERIC_ACTION_ERROR,
  err
});
