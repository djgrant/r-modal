import React, { PropTypes } from 'react';

const Page = React.createClass({
  propTypes: {
    ownProps: PropTypes.object,
    locked: PropTypes.bool
  },
  componentWillMount() {
    this.lastScrollY = 0;
  },
  componentWillReceiveProps(newProps) {
    if (newProps.locked && !this.props.locked) {
      this.lastScrollY = window.scrollY;
    }
  },
  componentDidUpdate(prevProps) {
    if (!this.props.locked && prevProps.locked) {
      window.scroll(0, this.lastScrollY);
    }
  },
  getStyles() {
    if (this.props.locked) {
      return {
        position: 'fixed',
        top: `${-window.scrollY}px`,
        left: 0,
        right: 0
      };
    }
  },
  render() {
    return (
      <div
        {...this.props.ownProps}
        className="page"
        style={this.getStyles()}
      />
    );
  }
});

export default Page;
