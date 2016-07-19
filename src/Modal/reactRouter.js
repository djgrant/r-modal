import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import DefaultModal from './Modal';

export const WithRoutesInModal = withRouter(React.createClass({
  propTypes: {
    component: PropTypes.func,
    modal: PropTypes.func,
    location: PropTypes.object.isRequired,
    children: PropTypes.node,
    router: PropTypes.object,
    routes: PropTypes.array,
    returnTo: PropTypes.any
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
    if (nextProps.location.key !== this.props.location.key) {
      this.previousLocation = this.props.location;
    }
  },
  closeModal() {
    const returnTo = this.props.returnTo || this.previousLocation.pathname;
    this.props.router.push(returnTo);
  },
  render() {
    if (this.props.returnTo) {
      const showModal = this.props.routes.length > 1;
      return (
        <div>
          <this.props.component />
          <this.Modal
            open={showModal}
            onRequestClose={this.closeModal}>
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
        <this.Modal
          open={showModal}
          onRequestClose={this.closeModal}>
          {this.props.children}
        </this.Modal>
      </this.props.component>
    );
  }
}));
