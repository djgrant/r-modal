import React, { PropTypes } from 'React';

const Example = React.createClass({
  propTypes: {
    title: PropTypes.string,
    code: PropTypes.string,
    children: PropTypes.node
  },
  render() {
    return (
      <div className="example">
        <h3>{this.props.title}</h3>
        {this.props.children}
        <details>
          <summary>Code</summary>
          <pre>{this.props.code}</pre>
        </details>
      </div>
    );
  }
});

export default Example;
