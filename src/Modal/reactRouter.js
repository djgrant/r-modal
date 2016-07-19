import React, { PropTypes } from 'react';
import DefaultModal from './Modal';

export const WithRoutesInModal = React.createClass({
  propTypes: {
    always: PropTypes.bool,
    component: PropTypes.func,
    modal: PropTypes.func,
    location: PropTypes.object.isRequired,
    children: PropTypes.node
  },
  componentWillMount() {
    this.Modal = this.props.modal || DefaultModal;
  },
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.location.key !== this.props.location.key &&
      nextProps.location.state &&
      nextProps.location.state.modal
    ) {
      this.previousChildren = this.props.children;
    }
  },
  render() {
    if (this.props.always) {
      return (
        <div>
          <this.props.component />
          <this.Modal open onRequestClose={() => window.history.back()}>
            {this.props.children}
          </this.Modal>
        </div>
      );
    }

    const showModal = (
      this.props.location.state &&
      this.props.location.state.modal &&
      this.previousChildren
    );

    return (
      <this.props.component>
        {showModal ?
          this.previousChildren :
          this.props.children
        }
        <this.Modal open={showModal} onRequestClose={() => window.history.back()}>
          {this.props.children}
        </this.Modal>
      </this.props.component>
    );
  }
});
