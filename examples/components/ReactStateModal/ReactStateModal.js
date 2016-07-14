import React, { PropTypes } from 'react';
import Modal from '../MyModal';

export const ReactStateModal = React.createClass({
  propTypes: {
    lockPage: PropTypes.func,
    unlockPage: PropTypes.func
  },
  getInitialState: () => ({
    open: false
  }),
  openModal() {
    this.setState({
      open: true
    });
  },
  closeModal() {
    this.setState({
      open: false
    });
  },
  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open ReactStateModal</button>
        <Modal
          open={this.state.open}
          onRequestClose={this.closeModal}>
          This is a Modal
          <button onClick={this.closeModal}>Close Modal</button>
        </Modal>
      </div>
    );
  }
});

export default ReactStateModal;
