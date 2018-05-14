import * as types from './Puppy.types';
import store from 'Redux/Store';

export const getPuppies = () => {};

export const getPuppiesSuccess = puppies => ({
  type: types.GET_PUPPIES_SUCCESS,
  puppies
});

export const getPuppiesError = err => ({
  type: types.GET_PUPPIES_SUCCESS,
  err
});
