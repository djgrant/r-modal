import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { WithRoutesInModal } from 'r-modal/lib/react-router';
import store from './store';
import App from './App';
import Index from './components/IndexRoute';

const ModalContent = props => (<div>This is a modal with id: {props.params.id}</div>);

let i = 100;
const boardContent = [];
while (i > 0) {
  boardContent.push(<div key={i}>dummy content</div>);
  i--;
}

const Board = props => (
  <App {...props}>
    {boardContent}
  </App>
);

const DefaultWithRoutesInModal = props => (
  <WithRoutesInModal
    {...props}
    component={App}
  />
);

const BoardWithRoutesInModal = props => (
  <WithRoutesInModal
    {...props}
    component={Board}
    parentLocation={`/boards/${props.params.id[0]}`}
  />
);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={DefaultWithRoutesInModal}>
        <IndexRoute component={Index} />
        <Route path="pictures/:id" component={ModalContent} />
      </Route>
      <Route path="boards/:id" component={BoardWithRoutesInModal}>
        <Route path="cards/:id" component={ModalContent} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
