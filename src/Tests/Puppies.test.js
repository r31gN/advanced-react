import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as constants from '../Constants/Constants';
import * as actions from '../Actions/Puppies.actions';
import * as types from '../Types/Puppies.types';
import reducer from '../Reducers/Puppies.reducer';

describe('Puppies sync actions', () => {
  it('Should create an action to create a puppy successfully', () => {
    const puppy = {};
    const expectedAction = {
      type: types.CREATE_PUPPY_SUCCESS,
      payload: { puppy }
    };
    expect(actions.createPuppySuccess(puppy)).toEqual(expectedAction);
  });

  it('Should create an action to read puppies successfully', () => {
    const puppies = [];
    const expectedAction = {
      type: types.READ_PUPPIES_SUCCESS,
      payload: { puppies }
    };
    expect(actions.readPuppiesSuccess(puppies)).toEqual(expectedAction);
  });

  it('Should create an action to update a puppy successfully', () => {
    const puppy = { name: '', type: '', adopted: true };
    const expectedAction = {
      type: types.UPDATE_PUPPY_SUCCESS,
      payload: { puppy }
    };
    expect(actions.updatePuppySuccess(puppy)).toEqual(expectedAction);
  });

  it('Should create an action to delete a puppy successfully', () => {
    const puppyId = 0;
    const expectedAction = {
      type: types.DELETE_PUPPY_SUCCESS,
      payload: { puppyId }
    };
    expect(actions.deletePuppySuccess(puppyId)).toEqual(expectedAction);
  });
});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Puppies async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('Creates createPuppySuccess when creating a puppy has been completed successfully', () => {
    fetchMock.postOnce('/puppies', {
      body: {},
      headers: { 'Content-Type': 'application/json' }
    });

    const expectedActions = [
      { type: types.CREATE_PUPPY_SUCCESS, payload: { puppy: {} } }
    ];
    const store = mockStore({ puppies: [] });

    store
      .dispatch(actions.createPuppy({}))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it('Creates readPuppiesSuccess when reading puppies has been completed successfully', () => {
    fetchMock.getOnce('/puppies', {
      body: [],
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const expectedActions = [
      {
        type: types.READ_PUPPIES_SUCCESS,
        payload: { puppies: [] }
      }
    ];
    const store = mockStore({ puppies: [] });

    store
      .dispatch(actions.readPuppies())
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it('Creates updatePuppySuccess when updating a puppy has been completed successfully', () => {
    const puppy = {
      id: 1
    };

    fetchMock.putOnce(`/puppies/${puppy.id}`, {
      body: puppy,
      headers: { 'Content-Type': 'application/json' }
    });

    const expectedActions = [
      { type: types.UPDATE_PUPPY_SUCCESS, payload: { puppy } }
    ];
    const store = mockStore({ puppies: [] });

    store
      .dispatch(actions.updatePuppy(puppy))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it('Creates deletePuppySuccess when deleting a puppy has been completed successfully', () => {
    const puppyId = 1;

    fetchMock.deleteOnce(`/puppies/${puppyId}`, {
      body: {},
      headers: { 'Content-Type': 'application/json' }
    });

    const expectedActions = [
      { type: types.DELETE_PUPPY_SUCCESS, payload: { puppyId } }
    ];
    const store = mockStore({ puppies: [] });

    store
      .dispatch(actions.deletePuppy(puppyId))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });
});

describe('Puppies reducer tests', () => {
  it('Should return the initial state for puppies reducer', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('Should handle changing state when new puppies come are read', () => {
    const puppies = [{ name: 'Reign', type: 'Beast', adopted: false }];

    expect(
      reducer(undefined, {
        type: types.READ_PUPPIES_SUCCESS,
        payload: { puppies }
      })
    ).toEqual(puppies);
  });
});
