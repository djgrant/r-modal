import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import Modal from '../MyModal';

export const RouterStateModal = React.createClass({
  propTypes: {
    router: PropTypes.object,
    location: PropTypes.object
  },
  closeModal() {
    window.history.back();
  },
  render() {
    return (
      <Modal
        open={this.props.location.state.modal && this.props.location.query.modal || false}
        onRequestClose={this.closeModal}>
        This is a Modal
        <button onClick={this.closeModal}>Close Modal</button>
      </Modal>
    );
  }
});

export default withRouter(RouterStateModal);
