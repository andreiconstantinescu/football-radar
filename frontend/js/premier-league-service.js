'use strict'

var _ = require('lodash');

var games = require('./games');
var teams = require('./teams');

var premierLeagueService = {
  init: function (cb) {
    games.init();
    teams.init();
    this.getTeams(cb);
  },
  getTeams: function (cb) {
    teams.getTeams().then(function (currentTeams) {
      this.currentLeagueTeams = currentTeams;
      this.initTeamsInLeague();
      this.getGames(cb);
    }.bind(this))
  },

  initTeamsInLeague: function () {
    this.currentLeague = _.map(this.currentLeagueTeams, function (team) {
      return {
        position: 0,
        id: team.id,
        name: team.name,
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalsDifference: 0,
        currentPoints: 0
      };
    }.bind(this));
  },

  getGames: function (cb) {
    games.getGames();
    games.webSocket.onmessage = function (message) {
      message = JSON.parse(message.data);
      this.updateLeague(message);
      cb();
    }.bind(this);
  },

  updateLeague: function (currentMatch) {
    // parse the number of goals from each match that comes on the wire
    currentMatch.homeGoals = parseInt(currentMatch.homeGoals)
    currentMatch.awayGoals = parseInt(currentMatch.awayGoals)

    this.currentLeague = _.each(this.currentLeague, function (Team) {

      // increment the currentTeam's number of played games
      if (Team.id === currentMatch.homeTeamId || Team.id === currentMatch.awayTeamId) {
        Team.played += 1;

      // check if the currentMatch is a draw, the goals increment in the this.checkMatch function
      if (currentMatch.homeGoals === currentMatch.awayGoals) {
        Team.currentPoints += 1;
        Team.drawn += 1
      }

      // check which team of the currentMatch has won/lost and add poitns accordingly
      if (Team.id === currentMatch.homeTeamId) {
        Team = this.checkMatch(Team, currentMatch, 'home');
      }
      else if (Team.id === currentMatch.awayTeamId) {
        Team = this.checkMatch(Team, currentMatch, 'away');
      }
    }
    }.bind(this));
      this.currentLeague = this.sortLeague();
  },

  checkMatch: function (team, match, where) {
    var addPoints = function (result) {
      if (result === 'won') {
        team.won += 1;
        team.currentPoints += 3;
      } else {
        team.lost += 1;
      }
    };

    var updateGoals = function (forPoints, againstPoints) {
      team.goalsFor += forPoints;
      team.goalsAgainst += againstPoints;
    };

    if (where === 'home') {
      if (match.homeGoals > match.awayGoals) {
        addPoints('won');
      } else if (match.homeGoals < match.awayGoals){
        addPoints('lost');
      }

      updateGoals(match.homeGoals, match.awayGoals);
    } else {
      if (match.homeGoals < match.awayGoals) {
        addPoints('won');
      } else if (match.homeGoals > match.awayGoals){
        addPoints('lost');
      }

      updateGoals(match.awayGoals, match.homeGoals);
    }

    team.goalsDifference = team.goalsFor - team.goalsAgainst;
    return team;
  },

  sortLeague: function() {
    this.currentLeague = _.sortByOrder(
      this.currentLeague,
      ['currentPoints', 'goalsDifference', 'goalsFor', 'name'],
      [false, false, false, true]
    );

      return this.currentLeague;
  }
};

module.exports = premierLeagueService;
