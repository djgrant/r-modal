import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Page from './Page/Page';
import { lockPage, unlockPage } from './Page/duck';
import { openModal } from './Modal/duck';
import MyModal, { MY_MODAL } from './MyModal';
import './styles.css';

const App = React.createClass({
  propTypes: {
    openModal: PropTypes.func,
    lockPage: PropTypes.func,
    unlockPage: PropTypes.func
  },
  render() {
    const content = [];
    let i = 0;
    while (i < 10) {
      content.push(<p key={i}>Test {i}</p>);
      i++;
    }

    return (
      <Page>
        <h1>Example</h1>
        {content}
        <button onClick={this.props.openModal}>Open Modal</button>
        <button onClick={this.props.lockPage}>Lock Page</button>
        <button onClick={this.props.unlockPage}>Unlock Page</button>
        {content}
        <MyModal />
      </Page>
    );
  }
});

export default connect(
  null,
  dispatch => ({
    openModal: () => dispatch(openModal(MY_MODAL)),
    lockPage: () => dispatch(lockPage()),
    unlockPage: () => dispatch(unlockPage())
  })
)(App);
