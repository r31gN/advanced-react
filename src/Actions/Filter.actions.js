import * as types from '../Types/Filter.types';

export const filterPuppies = filter => ({
  type: types.FILTER_PUPPIES,
  payload: { filter }
});
