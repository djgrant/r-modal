import React, { PropTypes } from 'react';

const KEYCODES = {
  ESC: 27
};

export const Modal = React.createClass({
  propTypes: {
    children: PropTypes.node,
    open: PropTypes.bool,
    onRequestClose: PropTypes.func.isRequired,
    onBeforeOpen: PropTypes.func,
    onBeforeClose: PropTypes.func
  },
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
    if (this.props.open && e.keyCode === KEYCODES.ESC) {
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
