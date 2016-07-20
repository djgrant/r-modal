import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import Modal from '../MyModal';

export const RouterStateModal = React.createClass({
  propTypes: {
    router: PropTypes.object,
    location: PropTypes.object,
    children: PropTypes.node
  },
  closeModal() {
    window.history.back();
  },
  render() {
    return (
      <Modal
        open={this.props.router.isActive({ query: { modal: true }})}
        onRequestClose={this.closeModal}>
        {this.props.children}
        <button onClick={this.closeModal}>Close Modal</button>
      </Modal>
    );
  }
});

export default withRouter(RouterStateModal);
