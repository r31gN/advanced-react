import * as types from './Puppy.types';

export const genericActionError = err => ({
  type: types.GENERIC_ACTION_ERROR,
  err
});

export const getPuppiesSuccess = puppies => ({
  type: types.GET_PUPPIES_SUCCESS,
  puppies
});

export const getPuppies = () => async dispatch => {
  try {
    const res = await fetch(`/puppies`);
    const puppies = await res.json();
    dispatch(getPuppiesSuccess(puppies));
  } catch (err) {
    dispatch(genericActionError(err));
  }
};

export const addPuppySuccess = puppy => ({
  type: types.ADD_PUPPY_SUCCESS,
  puppy
});

export const addPuppy = puppy => async dispatch => {
  try {
    await fetch(`/puppies`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(puppy)
    });
    dispatch(addPuppySuccess(puppy));
    dispatch(getPuppies());
  } catch (err) {
    dispatch(genericActionError(err));
  }
};

export const deletePuppySuccess = puppyId => ({
  type: types.DELETE_PUPPY_SUCCESS,
  puppyId
});

export const deletePuppy = puppyId => async dispatch => {
  try {
    await fetch(`/puppies/${puppyId}`, { method: 'DELETE' });
    dispatch(deletePuppySuccess(puppyId));
    dispatch(getPuppies());
  } catch (err) {
    dispatch(genericActionError(err));
  }
};

export const adoptPuppySuccess = puppy => ({
  type: types.ADOPT_PUPPY_SUCCESS,
  puppy
});

export const adoptPuppy = (puppyId, puppy) => async dispatch => {
  try {
    await fetch(`/puppies/${puppyId}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(puppy)
    });
    dispatch(adoptPuppySuccess(puppy));
    dispatch(getPuppies());
  } catch (err) {
    dispatch(genericActionError(err));
  }
};

export const filterPuppies = filter => ({
  type: types.FILTER_PUPPIES,
  filter
});
