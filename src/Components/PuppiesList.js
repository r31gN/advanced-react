import React, { Component } from 'react';
import * as actions from '../Actions/Puppies.actions';
import { determineFilteredPuppies } from '../Utils/Utils';
import { connect } from 'react-redux';
import Puppy from './Puppy';

class PuppiesList extends Component {
  componentDidMount = () => this.props._readPuppies();

  render = () => {
    const puppies = this.props.puppies;
    const filter = this.props.filter;

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
}

const mapStateToProps = state => ({
  puppies: state.puppies,
  filter: state.filter
});

const mapDispatchToProps = (dispatch, props) => ({
  _readPuppies: () => dispatch(actions.readPuppies())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PuppiesList);
