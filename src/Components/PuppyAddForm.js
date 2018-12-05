import React, { useState } from 'react';
import * as actions from '../Actions/Puppies.actions';
import { connect } from 'react-redux';

const PuppyAddForm = ({ _createPuppy }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  return (
    <div className="u-mb-double u-fx u-fx-justify-center">
      <div className="puppy-add-form">
        <div className="u-fx u-fx-align-center u-mb-full">
          <label className="puppy-add-form__label">Name:</label>
          <input
            name="name"
            className="puppy-add-form__input u-pa-half"
            type="text"
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="u-fx u-fx-align-center  u-mb-full">
          <label className="puppy-add-form__label">Type:</label>
          <input
            name="type"
            className="puppy-add-form__input u-pa-half"
            type="text"
            onChange={e => setType(e.target.value)}
            value={type}
          />
        </div>
        <button
          className="puppy-save-btn u-pa-half"
          onClick={() => {
            _createPuppy({ name, type, adopted: false });

            setName('');
            setType('');
          }}
        >
          Save puppy
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  _createPuppy: puppy => dispatch(actions.createPuppy(puppy))
});

export default React.memo(
  connect(
    null,
    mapDispatchToProps
  )(PuppyAddForm)
);
