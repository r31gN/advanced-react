import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../Actions/Filter.actions';
import * as constants from '../Constants/Constants';
import PropTypes from 'prop-types';

class Filters extends Component {
  _onChangeFilterHandler = e => this.props._filterPuppies(e.target.value);

  render = () => (
    <div className="filters">
      <span className="u-mr-half">Change filters:</span>
      <select onChange={this._onChangeFilterHandler} value={this.props.filter}>
        <option value={`${constants.FILTER_ALL}`}>All</option>
        <option value={`${constants.FILTER_ADOPTED}`}>Adopted</option>
        <option value={`${constants.FILTER_NOT_ADOPTED}`}>Not Adopted</option>
      </select>
    </div>
  );
}

Filters.propTypes = {
  filter: PropTypes.oneOf([
    constants.FILTER_ALL,
    constants.FILTER_ADOPTED,
    constants.FILTER_NOT_ADOPTED
  ])
};

const mapStateToProps = state => ({
  filter: state.filter
});

const mapDispatchToProps = (dispatch, props) => ({
  _filterPuppies: filter => dispatch(actions.filterPuppies(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
