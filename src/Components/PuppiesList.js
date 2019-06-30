import React, { useEffect } from 'react';
import * as actions from '../Actions/Puppies.actions';
import { determineFilteredPuppies } from '../Utils/Utils';
import { connect } from 'react-redux';
import Puppy from './Puppy';

const PuppiesList = ({ _readPuppies, puppies, filter }) => {
  useEffect(() => {
    _readPuppies();
  }, [_readPuppies]);

  if (!puppies.length) {
    return null;
  }

  return (
    <ul className="puppies-list u-fx u-fx-space-between">
      {determineFilteredPuppies(puppies, filter).map(puppy => (
        <Puppy key={puppy.id} puppy={puppy} />
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  puppies: state.puppies,
  filter: state.filter
});

const mapDispatchToProps = dispatch => ({
  _readPuppies: () => dispatch(actions.readPuppies())
});

export default React.memo(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PuppiesList)
);
