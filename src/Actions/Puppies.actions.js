import * as constants from '../Constants/Constants';
import * as types from '../Types/Puppies.types';
import { genericActionError } from './Generic.actions';

export const createPuppySuccess = puppy => ({
  type: types.CREATE_PUPPY_SUCCESS,
  payload: { puppy }
});

export const createPuppy = puppy => async dispatch => {
  try {
    const res = await fetch(`${constants.BASE_API_URL}/puppies`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(puppy)
    });
    const newPuppy = await res.json();
    dispatch(createPuppySuccess(newPuppy));
  } catch (err) {
    dispatch(genericActionError(err));
  }
};

export const readPuppiesSuccess = puppies => ({
  type: types.READ_PUPPIES_SUCCESS,
  payload: { puppies }
});

export const readPuppies = () => async dispatch => {
  try {
    const res = await fetch(`${constants.BASE_API_URL}/puppies`);
    const puppies = await res.json();
    dispatch(readPuppiesSuccess(puppies));
  } catch (err) {
    dispatch(genericActionError(err));
  }
};

export const updatePuppySuccess = puppy => ({
  type: types.UPDATE_PUPPY_SUCCESS,
  payload: { puppy }
});

export const updatePuppy = puppy => async dispatch => {
  try {
    const res = await fetch(`${constants.BASE_API_URL}/puppies/${puppy.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(puppy)
    });
    const newPuppy = await res.json();
    dispatch(updatePuppySuccess(newPuppy));
  } catch (err) {
    dispatch(genericActionError(err));
  }
};

export const deletePuppySuccess = puppyId => ({
  type: types.DELETE_PUPPY_SUCCESS,
  payload: { puppyId }
});

export const deletePuppy = puppyId => async dispatch => {
  try {
    await fetch(`${constants.BASE_API_URL}/puppies/${puppyId}`, {
      method: 'DELETE'
    });
    dispatch(deletePuppySuccess(puppyId));
  } catch (err) {
    dispatch(genericActionError(err));
  }
};
