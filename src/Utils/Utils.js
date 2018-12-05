import * as constants from '../Constants/Constants';

export const determineFilteredPuppies = (puppiesArr, filter) => {
  let filteredPuppies = [];

  switch (filter) {
    case constants.FILTER_ALL:
      filteredPuppies = puppiesArr.slice(0);
      break;
    case constants.FILTER_ADOPTED:
      filteredPuppies = puppiesArr.filter(puppy => puppy.adopted);
      break;
    case constants.FILTER_NOT_ADOPTED:
      filteredPuppies = puppiesArr.filter(puppy => !puppy.adopted);
      break;
    default:
      filteredPuppies = puppiesArr.slice(0);
      break;
  }

  return filteredPuppies;
};
