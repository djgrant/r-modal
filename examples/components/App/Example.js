import React, { PropTypes } from 'react';

const Example = React.createClass({
  propTypes: {
    title: PropTypes.string,
    code: PropTypes.string,
    children: PropTypes.node
  },
  render() {
    return (
      <section>
        <h3>{this.props.title}</h3>
        {this.props.children}
        <details>
          <summary>Code</summary>
          <pre>{this.props.code}</pre>
        </details>
      </section>
    );
  }
});

export default Example;
