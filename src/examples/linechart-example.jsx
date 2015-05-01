var React = require('react');

var Linechart = require('../VisContainer.jsx').Linechart;

var LinechartExample = React.createClass({
  render: function () {
    var dataset = [
      {
        color: 'green',
        label: 'Data set 1',
        values: [{x: 0, y: -1}, {x: 1, y: -0.5}, {x: 2, y: 0}, {x: 3, y: 0.5}, {x: 4, y: 1}],
      },
      {
        color: 'blue',
        label: 'Data set 2',
        values: [{x: 0, y: 0.0001}, {x: 1, y: 100}, {x: 2, y: 0.0001}, {x: 3, y: 500}, {x: 4, y: .0001}],
      },
      {
        color: 'gray',
        label: 'mean line',
        dasharray: 5,
        values: [{x: 0, y: -0.3333}, {x: 1, y: 33.5}, {x: 2, y: 0.6667}, {x: 3, y: 167.833}, {x: 4, y: 1.6667}],
      }
    ];

    return (
      <Linechart
        scaleAxes={true}
        xLabel='Some useful experiment'
        yLabel='Meaningful data'
        dataset={dataset}/>
    )
  }
});

module.exports = LinechartExample;