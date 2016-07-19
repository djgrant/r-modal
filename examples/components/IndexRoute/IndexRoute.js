import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Example from './Example';
import readme from '../../../README.md';
import './styles.css';

import ReactStateModal from '../ReactStateModal';
import ReactStateModalCode from '!!raw!../ReactStateModal/ReactStateModal';

import { openModal, closeModal } from 'Modal';
import ReduxStateModal from '../ReduxStateModal';
import ReduxStateModalCode from '!!raw!../ReduxStateModal/ReduxStateModal';

import RouterStateModal from '../RouterStateModal';
// import RouterStateModalCode from '!!raw!../RouterStateModal/RouterStateModal';

const App = React.createClass({
  propTypes: {
    closeReduxModal: PropTypes.func.isRequired,
    openReduxModal: PropTypes.func.isRequired,
    openReduxModal2: PropTypes.func.isRequired
  },
  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: readme }} />
        <h2>Examples</h2>
        <Example
          title="Using React setState"
          code={ReactStateModalCode}>
          <ReactStateModal />
        </Example>
        <Example
          title="Using Redux state"
          code={ReduxStateModalCode}>
          <button onClick={this.props.openReduxModal}>Open Modal</button>
          <ReduxStateModal id="TEST_MODAL">
            Hello
            <button onClick={this.props.closeReduxModal}>Close</button>
          </ReduxStateModal>
        </Example>
        <Example
          title="Using Redux state again"
          code={ReduxStateModalCode}>
          <button onClick={this.props.openReduxModal2}>Open Modal</button>
          <ReduxStateModal id="TEST_MODAL_2">
            Hello again
            <button onClick={this.props.closeReduxModal}>Close</button>
          </ReduxStateModal>
        </Example>
        <Example
          title="Open routes in a modal with react-router state (à la pinterest)"
          code="">
          <Link to={{ pathname: 'pictures/1', state: { modal: true }}}>Open route in modal (using react-router state)</Link>
          <br />
          <Link to={{ pathname: 'pictures/1' }}>Go to route normally</Link>
        </Example>
        <Example
          title="Open all child routes in a modal (à la trello)"
          code="">
          <Link to={{ pathname: 'boards/1/cards/2'}}>Go to route (always opens in a modal)</Link>
        </Example>
        <Example
          title="Open modal with query params"
          code="">
          <Link to={{ query: { modal: true }, state: { modal: true }}}>Open Modal</Link>
          <RouterStateModal>It worked</RouterStateModal>
        </Example>
      </div>
    );
  }
});

export default connect(
  null,
  dispatch => ({
    openReduxModal: () => dispatch(openModal('TEST_MODAL')),
    openReduxModal2: () => dispatch(openModal('TEST_MODAL_2')),
    closeReduxModal: () => dispatch(closeModal())
  })
)(App);
