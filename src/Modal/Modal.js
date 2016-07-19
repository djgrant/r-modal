import React, { PropTypes } from 'react';

const KEYCODES = {
  ESC: 27
};

const Modal = React.createClass({
  propTypes: {
    children: PropTypes.node,
    open: PropTypes.bool,
    onRequestClose: PropTypes.func.isRequired,
    onBeforeOpen: PropTypes.func.isRequired,
    onBeforeClose: PropTypes.func.isRequired
  },
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    if (this.props.open) {
      this.props.onBeforeOpen();
    }
  },
  componentWillUnmount() {
    this.props.onBeforeClose();
  },
  componentWillReceiveProps(newProps) {
    if (newProps.open && !this.props.open) {
      this.props.onBeforeOpen();
    }
    else if (!newProps.open && this.props.open) {
      this.props.onBeforeClose();
    }
  },
  getStyles() {
    return {
      overlay: !this.props.open ? null : {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)'
      }
    };
  },
  getOverlayRef(node) {
    this._overlay = node;
  },
  handleOverlayClick(e) {
    if (e.target === this._overlay) {
      this.props.onRequestClose();
    }
  },
  handleKeyDown: function(e) {
    if (e.keyCode === KEYCODES.ESC) {
      e.preventDefault();
      this.props.onRequestClose();
    }
  },
  render() {
    return (
      <div
        ref={this.getOverlayRef}
        className="overlay"
        style={this.getStyles().overlay}
        onClick={this.handleOverlayClick}>
        {this.props.open && (
          <div className="modal">{this.props.children}</div>
        )}
      </div>
    );
  }
});

export default Modal;
