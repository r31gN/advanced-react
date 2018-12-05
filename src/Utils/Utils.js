import * as Constants from '../Constants/Constants';

export const determineFilteredPuppies = (puppiesArr, filter) => {
  let filteredPuppies = [];

  switch (filter) {
    case Constants.FILTER_ALL:
      filteredPuppies = puppiesArr.slice(0);
      break;
    case Constants.FILTER_ADOPTED:
      filteredPuppies = puppiesArr.filter(puppy => puppy.adopted);
      break;
    case Constants.FILTER_NOT_ADOPTED:
      filteredPuppies = puppiesArr.filter(puppy => !puppy.adopted);
      break;
    default:
      filteredPuppies = puppiesArr.slice(0);
      break;
  }

  return filteredPuppies;
};
