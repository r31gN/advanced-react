import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as constants from '../Constants/Constants';
import * as actions from '../Actions/Generic.actions';
import * as types from '../Types/Generic.types';
import reducer from '../Reducers/Generic.reducer';

describe('Generic sync actions', () => {
  it('Should create an action to treat generic error', () => {
    const error = new Error('Some generic error.');
    const expectedAction = {
      type: types.GENERIC_ACTION_ERROR,
      payload: { error }
    };
    expect(actions.genericActionError(error)).toEqual(expectedAction);
  });
});

describe('Generic reducer tests', () => {
  it('Should handle changing state when an error happens', () => {
    const error = new Error('Some generic error.');
    const expectedState = {
      error
    };

    expect(
      reducer(undefined, {
        type: types.GENERIC_ACTION_ERROR,
        payload: { error }
      })
    ).toEqual(expectedState);
  });
});
