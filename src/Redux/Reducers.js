import { combineReducers } from 'redux';
import puppies from '../Reducers/Puppies.reducer';
import filter from '../Reducers/Filter.reducer';
import generic from '../Reducers/Generic.reducer';

export default combineReducers({ puppies, filter, generic });
