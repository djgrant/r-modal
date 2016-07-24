import React, { PropTypes } from 'react';

const KEYCODES = {
  ESC: 27
};

export const Modal = React.createClass({
  propTypes: {
    children: PropTypes.node,
    className: PropTypes.string,
    overlayClassName: PropTypes.string,
    style: PropTypes.shape({
      modal: PropTypes.Object,
      overlay: PropTypes.Object
    }),
    open: PropTypes.bool,
    flatNodes: PropTypes.bool,
    onRequestClose: PropTypes.func.isRequired,
    onBeforeOpen: PropTypes.func,
    onBeforeClose: PropTypes.func
  },
  getDefaultProps: () => ({
    style: {
      overlay: {},
      modal: {}
    }
  }),
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    if (this.props.open) {
      this.onBeforeOpen();
    }
  },
  componentWillReceiveProps(newProps) {
    if (newProps.open && !this.props.open) {
      this.onBeforeOpen();
    }
    else if (!newProps.open && this.props.open) {
      this.onBeforeClose();
    }
  },
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    this.onBeforeClose();
  },
  onBeforeOpen() {
    if (typeof this.props.onBeforeOpen === 'function') {
      this.props.onBeforeOpen();
    }
  },
  onBeforeClose() {
    if (typeof this.props.onBeforeClose === 'function') {
      this.props.onBeforeClose();
    }
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
    if (this.props.open && e.keyCode === KEYCODES.ESC) {
      e.preventDefault();
      this.props.onRequestClose();
    }
  },
  render() {
    const overlay = (props = {}) => (
      <div
        ref={this.getOverlayRef}
        className={this.props.overlayClassName}
        style={this.props.style.overlay}
        onClick={this.handleOverlayClick}
        {...props}
      />
    );
    const modal = (
      <div
        className={this.props.className}
        style={this.props.style.modal}>
        {this.props.children}
      </div>
    );

    if (!this.props.open) {
      return null;
    }

    if (this.props.flatNodes) {
      return (
        <div>
          {overlay()}
          {modal}
        </div>
      );
    }

    return (
      <div>
        {overlay({
          children: modal
        })}
      </div>
    );
  }
});
