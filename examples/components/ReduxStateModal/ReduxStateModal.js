import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Modal from '../MyModal';
import { closeModal, registerModal, modalsSelectors } from 'Modal';

export const ReduxStateModal = React.createClass({
  propTypes: {
    ownProps: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    registerModal: PropTypes.func.isRequired
  },
  componentWillMount() {
    this.props.registerModal();
  },
  render() {
    return (
      <Modal
        {...this.props.ownProps}
        open={this.props.open}
        onRequestClose={this.props.closeModal}
      />
    );
  }
});

export default connect(
  (state, ownProps) => ({
    ownProps,
    open: modalsSelectors.isOpen(state.modals, ownProps.id)
  }),
  (dispatch, ownProps) => ({
    closeModal: () => dispatch(closeModal()),
    registerModal: () => dispatch(registerModal(ownProps.id))
  })
)(ReduxStateModal);
