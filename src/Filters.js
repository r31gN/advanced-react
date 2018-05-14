import React from 'react';
import * as constants from './Constants';
import PropTypes from 'prop-types';

const Filters = ({ currentFilter, onChangeFilterHandler }) => (
  <div className="filters">
    <span className="u-mr-half">Change filters:</span>
    <select onChange={onChangeFilterHandler} value={currentFilter}>
      <option value={`${constants.FILTER_ALL}`}>All</option>
      <option value={`${constants.FILTER_ADOPTED}`}>Adopted</option>
      <option value={`${constants.FILTER_NOT_ADOPTED}`}>Not Adopted</option>
    </select>
  </div>
);

Filters.propTypes = {
  currentFilter: PropTypes.oneOf([
    constants.FILTER_ALL,
    constants.FILTER_ADOPTED,
    constants.FILTER_NOT_ADOPTED
  ]),
  onChangeFilterHandler: PropTypes.func.isRequired
};

export default Filters;
