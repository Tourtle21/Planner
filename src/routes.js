'use strict';

var React = require('react');
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Index = require('./components/Index');
var App = require('./components/app')

var routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Index} />
	</Route>
);

module.exports = routes;