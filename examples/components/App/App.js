import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import MyPage from '../MyPage';
import Example from './Example';
import readme from '../../../README.md';
import './styles.css';

import ReactStateModal from '../ReactStateModal';
import ReactStateModalCode from '!!raw!../ReactStateModal/ReactStateModal';

import { openModal, closeModal } from 'Modal';
import ReduxStateModal from '../ReduxStateModal';
import ReduxStateModalCode from '!!raw!../ReduxStateModal/ReduxStateModal';

const App = React.createClass({
  propTypes: {
    closeReduxModal: PropTypes.func.isRequired,
    openReduxModal: PropTypes.func.isRequired,
    openReduxModal2: PropTypes.func.isRequired
  },
  render() {
    return (
      <div>
        <MyPage>
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
        </MyPage>
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
