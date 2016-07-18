import { combineReducers } from 'redux';
import configureStore from './lib/configureStore';
import createGlobalSelectors from './lib/createGlobalSelectors';
import {
  reducer as pageReducer,
  selectors as pageSelectors } from 'Page';
import {
  reducer as modalsReducer,
  selectors as modalsSelectors } from 'Modal';

export const reducer = combineReducers({
  page: pageReducer,
  modals: modalsReducer
});

export const selectors = createGlobalSelectors({
  page: pageSelectors,
  modals: modalsSelectors
});

export default configureStore(reducer);
