'use strict';

var React = require('react');
var Examples = React.createFactory(require('./examples/examples.jsx'));

React.render(new Examples(), document.getElementById('examples'));