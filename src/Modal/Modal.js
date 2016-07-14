import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { declareModal, closeModal } from './duck';
import { selectors } from '../store';
import './styles.css';

const Modal = React.createClass({
  propTypes: {
    id: PropTypes.string,
    ownProps: PropTypes.object,
    open: PropTypes.bool,
    declareModal: PropTypes.func,
    closeModal: PropTypes.func
  },
  componentWillMount() {
    this.props.declareModal(this.props.id);
  },
  getStyles() {
    if (this.props.open) {
      return {
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)'
        }
      };
    }
    return { overlay: null };
  },
  handleOverlayClick(e) {
    if (e.target.className.indexOf('close-modal') !== -1) {
      this.props.closeModal();
    }
  },
  render() {
    return (
      <div
        className="overlay close-modal"
        style={this.getStyles().overlay}
        onClick={this.handleOverlayClick}>
        {this.props.open && (
          <div
            {...this.props.ownProps}
            className="modal"
          />
        )}
      </div>
    );
  }
});

export default connect(
  (state, ownProps) => ({
    ownProps,
    open: selectors.isOpen(state, ownProps.id)
  }),
  dispatch => ({
    declareModal: id => dispatch(declareModal(id)),
    closeModal: () => dispatch(closeModal())
  })
)(Modal);
