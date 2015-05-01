var React = require('react');

var LinechartExample = require('./linechart-example.jsx');

var Examples = React.createClass({
  render: function() {
    return (
      <ul>
        <li><LinechartExample /></li>
      </ul>
    )
  }
});

module.exports = Examples;