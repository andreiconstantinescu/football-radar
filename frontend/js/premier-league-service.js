'use strict'

var _ = require('lodash');

var games = require('./games')
var teams = require('./teams')

var currentLeagueTeams = [];
var currentLeague = [];

var premierLeagueService = {
  init: function () {
    games.init();
    teams.init();
    this.getTeams();
  },
  getTeams: function () {
    teams.getTeams().then(function (currentTeams) {
      currentLeagueTeams = JSON.parse(currentTeams);
    }).then(function () {
      premierLeagueObject.init();
    }).then(function () {

    });
  }
};

var premierLeagueObject = {
  init: function () {
    currentLeague = _.map(currentLeagueTeams, function (team) {
      var tmp =  {
        position: 0,
        teamId: team.id,
        teamName: team.name,
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goals: {
          for: 0,
          against: 0,
          difference: 0
        },
        currentPoints: 0
      };
      // console.log(tmp);
      return tmp;
    });
  }
};

premierLeagueService.init();
