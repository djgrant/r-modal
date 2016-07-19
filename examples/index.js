import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store from './store';
import Index from './components/IndexRoute';
import { WithRoutesInModal } from 'Modal';
import MyModal from './components/MyModal';
import MyPage from './components/MyPage';

const App = ({ children }) => (
  <div>{children}</div>
);

const ModalContent = props => (<div>This is a modal with id: {props.params.id}</div>);

ModalContent.propTypes = {
  params: PropTypes.object
};

const DefaultWithRoutesInModal = props => (
  <WithRoutesInModal
    {...props}
    modal={MyModal}
    component={App}
  />
);

const BoardWithRoutesInModal = props => (
  <WithRoutesInModal
    {...props}
    modal={MyModal}
    component={Index}
    returnTo={`/boards/${props.params.id[0]}`}
  />
);

render(
  <Provider store={store}>
    <MyPage>
      <Router history={browserHistory}>
        <Route path="/" component={DefaultWithRoutesInModal}>
          <IndexRoute component={Index} />
          <Route path="pictures/:id" component={ModalContent} />
        </Route>
        <Route path="/boards/:id" component={BoardWithRoutesInModal}>
          <Route path="cards/:id" component={ModalContent} />
        </Route>
      </Router>
    </MyPage>
  </Provider>,
  document.getElementById('root')
);
