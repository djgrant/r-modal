import React, { PropTypes } from 'react';
import withRouter from 'react-router/lib/withRouter';

export const WithRoutesInModal = withRouter(React.createClass({
  propTypes: {
    component: PropTypes.func,
    location: PropTypes.object.isRequired,
    children: PropTypes.node,
    router: PropTypes.object,
    routes: PropTypes.array,
    parentLocation: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ])
  },
  getInitialState: () => ({
    pageLocked: false
  }),
  componentWillReceiveProps(nextProps) {
    if (
      // modal requested
      nextProps.location.state &&
      nextProps.location.state.modal &&
      // route changed
      nextProps.location.pathname !== this.props.location.pathname &&
      // wasn't just a re-render
      nextProps.location.key !== this.props.location.key
    ) {
      this.previousChildren = this.props.children;
    }
    if (nextProps.location.key !== this.props.location.key) {
      this.previousLocation = this.props.location;
    }
  },
  closeModal() {
    const previousLocation = this.props.parentLocation || this.previousLocation.pathname;
    this.props.router.push(previousLocation);
  },
  render() {
    if (this.props.parentLocation) {
      const showModal = this.props.routes.length > 1;
      return (
        <this.props.component
          showModal={showModal}
          modalContent={this.props.children}
          onModalClose={this.closeModal}
        />
      );
    }

    const showModal = !!(
      this.props.location.state &&
      this.props.location.state.modal &&
      this.previousChildren
    );

    return (
      <this.props.component
        showModal={showModal}
        modalContent={this.props.children}
        onModalClose={this.closeModal}>
        {showModal ?
          this.previousChildren :
          this.props.children
        }
      </this.props.component>
    );
  }
}));
