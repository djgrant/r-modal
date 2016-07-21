import React, { PropTypes } from 'react';

export const Page = React.createClass({
  propTypes: {
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
  getLockedStyles() {
    return {
      position: 'fixed',
      top: `${-this.lastScrollY}px`,
      left: 0,
      right: 0
    };
  },
  render() {
    const { locked, ...ownProps } = this.props;
    return (
      <div
        {...ownProps}
        style={locked ? this.getLockedStyles() : {}}
      />
    );
  }
});
