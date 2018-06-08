import React, { Component } from 'react';
import * as actions from '../Actions/Puppies.actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Puppy extends Component {
  _onClickAdoptHandler = puppy => {
    const newPuppy = {
      ...puppy,
      adopted: !puppy.adopted
    };
    this.props._updatePuppy(newPuppy);
  };

  _onClickDeleteHandler = puppyId => this.props._deletePuppy(puppyId);

  render = () => {
    const puppy = this.props.puppy;
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
            onClick={() => this._onClickAdoptHandler(puppy)}
          >
            {adopted ? 'Cancel Adoption' : 'Adopt me!'}
          </button>
          <button
            className="puppies-list__item__delete-btn u-pa-half"
            onClick={() => this._onClickDeleteHandler(id)}
          >
            Delete puppy
          </button>
        </div>
      </li>
    );
  };
}

Puppy.propTypes = {
  puppy: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    type: PropTypes.string,
    adopted: PropTypes.bool
  })
};

const mapDispatchToProps = (dispatch, props) => ({
  _updatePuppy: puppy => dispatch(actions.updatePuppy(puppy)),
  _deletePuppy: puppyId => dispatch(actions.deletePuppy(puppyId))
});

export default connect(
  null,
  mapDispatchToProps
)(Puppy);
