import * as types from '../Types/Generic.types';

export const genericActionError = error => ({
  type: types.GENERIC_ACTION_ERROR,
  payload: { error }
});
