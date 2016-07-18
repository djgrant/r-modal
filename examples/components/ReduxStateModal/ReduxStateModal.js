import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Modal from '../MyModal';
import { closeModal, declareModal, selectors } from 'Modal';

export const ReduxStateModal = React.createClass({
  propTypes: {
    ownProps: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    declareModal: PropTypes.func.isRequired
  },
  componentWillMount() {
    this.props.declareModal();
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
    open: selectors.isOpen(state.modals, ownProps.id)
  }),
  (dispatch, ownProps) => ({
    closeModal: () => dispatch(closeModal()),
    declareModal: () => dispatch(declareModal(ownProps.id))
  })
)(ReduxStateModal);
