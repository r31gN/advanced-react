import React from 'react';
import * as actions from '../Actions/Puppies.actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Puppy = ({ _updatePuppy, _deletePuppy, puppy }) => {
  const { id, name, type, adopted } = puppy;

  return (
    <li className="puppies-list__item u-pa-double">
      <div className="u-mb-double">
        <p>Name: {name}</p>
        <p>Type: {type}</p>
        <p>Adopted: {adopted ? 'True' : 'False'}</p>
      </div>
      <div>
        <button
          className={`puppies-list__item__adopt-btn u-pa-half u-mr-double ${
            adopted ? 'adopted' : 'not-adopted'
          }`}
          onClick={() => {
            const newPuppy = {
              ...puppy,
              adopted: !puppy.adopted
            };
            _updatePuppy(newPuppy);
          }}
        >
          {adopted ? 'Cancel Adoption' : 'Adopt me!'}
        </button>
        <button
          className="puppies-list__item__delete-btn u-pa-half"
          onClick={() => _deletePuppy(id)}
        >
          Delete puppy
        </button>
      </div>
    </li>
  );
};

Puppy.propTypes = {
  puppy: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    type: PropTypes.string,
    adopted: PropTypes.bool
  })
};

const mapDispatchToProps = dispatch => ({
  _updatePuppy: puppy => dispatch(actions.updatePuppy(puppy)),
  _deletePuppy: puppyId => dispatch(actions.deletePuppy(puppyId))
});

export default React.memo(
  connect(
    null,
    mapDispatchToProps
  )(Puppy)
);
