import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

export default (reducer) => createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
