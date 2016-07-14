import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectors } from '../store';

const Page = React.createClass({
  propTypes: {
    ownProps: PropTypes.object,
    locked: PropTypes.bool,
    scrollY: PropTypes.number
  },
  componentDidUpdate(prevProps) {
    if (!this.props.locked && prevProps.locked) {
      window.scroll(0, this.props.scrollY);
    }
  },
  getStyles() {
    if (this.props.locked) {
      return {
        position: 'fixed',
        top: `${-this.props.scrollY}px`,
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

export default connect(
  (state, ownProps) => ({
    locked: selectors.getLocked(state),
    scrollY: selectors.getScrollY(state),
    ownProps
  })
)(Page);
