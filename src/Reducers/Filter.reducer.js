import * as types from '../Types/Filter.types';
import * as constants from '../Constants/Constants';

const filter = (state = constants.FILTER_ALL, action) => {
  switch (action.type) {
    case types.FILTER_PUPPIES:
      return action.payload.filter;

    default:
      return state;
  }
};

export default filter;
