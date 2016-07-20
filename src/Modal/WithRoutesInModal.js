import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';
import { Modal as DefaultModal } from './Modal';
import { Page as DefaultPage } from '../Page';

export const WithRoutesInModal = withRouter(React.createClass({
  propTypes: {
    component: PropTypes.func,
    modal: PropTypes.func,
    page: PropTypes.func,
    location: PropTypes.object.isRequired,
    children: PropTypes.node,
    router: PropTypes.object,
    routes: PropTypes.array,
    returnTo: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ])
  },
  getInitialState: () => ({
    pageLocked: false
  }),
  componentWillMount() {
    this.Modal = this.props.modal || DefaultModal;
    this.Page = this.props.page || DefaultPage;
  },
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
    const returnTo = this.props.returnTo || this.previousLocation.pathname;
    this.props.router.push(returnTo);
  },
  lockPage() {
    this.setState({ pageLocked: true });
  },
  unlockPage() {
    this.setState({ pageLocked: false });
  },
  render() {
    const modal = (open) => (
      <this.Modal
        open={open}
        onRequestClose={this.closeModal}
        onBeforeOpen={this.lockPage}
        onBeforeClose={this.unlockPage}>
        {this.props.children}
      </this.Modal>
    );

    if (this.props.returnTo) {
      const showModal = this.props.routes.length > 1;
      return (
        <div>
          <this.Page locked={this.state.pageLocked}>
            <this.props.component />
          </this.Page>
          {modal(showModal)}
        </div>
      );
    }

    const showModal = !!(
      this.props.location.state &&
      this.props.location.state.modal &&
      this.previousChildren
    );

    return (
      <div>
        <this.Page locked={this.state.pageLocked}>
          <this.props.component>
            {showModal ?
              this.previousChildren :
              this.props.children
            }
          </this.props.component>
        </this.Page>
        {modal(showModal)}
      </div>
    );
  }
}));
