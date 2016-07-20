import { combineReducers } from 'redux';
import configureStore from './lib/configureStore';
import createGlobalSelectors from './lib/createGlobalSelectors';
import { pageReducer, pageSelectors } from 'Page';
import { modalsReducer, modalsSelectors } from 'Modal';

export const reducer = combineReducers({
  page: pageReducer,
  modals: modalsReducer
});

export const selectors = createGlobalSelectors({
  page: pageSelectors,
  modals: modalsSelectors
});

export default configureStore(reducer);
