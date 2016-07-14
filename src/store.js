import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createGlobalSelectors from './lib/createGlobalSelectors';
import pageReducer, { selectors as pageSelectors } from './Page/duck';
import modalReducer, { selectors as modalSelectors } from './Modal/duck';

export const reducer = combineReducers({
  page: pageReducer,
  modal: modalReducer
});

export const selectors = createGlobalSelectors({
  page: pageSelectors,
  modal: modalSelectors
});

export default createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
