'use strict'
var React = require('react');
var MainView = require('./components/MainView');

var premierLeagueService = require('./js/premier-league-service');

React.render(<MainView premierLeague={premierLeagueService} />, document.getElementById('app'));
