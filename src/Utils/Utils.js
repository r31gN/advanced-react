export const determineFilteredPuppies = (puppiesArr, filter) => {
  let filteredPuppies = [];

  switch (filter) {
    case 'ALL':
      filteredPuppies = puppiesArr.slice(0);
      break;
    case 'ADOPTED':
      filteredPuppies = puppiesArr.filter(puppy => puppy.adopted);
      break;
    case 'NOT_ADOPTED':
      filteredPuppies = puppiesArr.filter(puppy => !puppy.adopted);
      break;
    default:
      filteredPuppies = puppiesArr.slice(0);
      break;
  }

  return filteredPuppies;
};
