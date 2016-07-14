import { combineReducers } from 'redux';
import configureStore from './lib/configureStore';
import createGlobalSelectors from './lib/createGlobalSelectors';
import {
  reducer as pageReducer,
  selectors as pageSelectors } from 'Page';

export const reducer = combineReducers({
  page: pageReducer
  // modal: modalReducer
});

export const selectors = createGlobalSelectors({
  page: pageSelectors
  // modal: modalSelectors
});

export default configureStore(reducer);
