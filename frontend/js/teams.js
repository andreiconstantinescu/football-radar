'use strict'
var request = require('request-promise');

var teams = {
  init: function (url) {
    this.url = url || 'http://127.0.0.1:8080/teams';
    // this.getTeams;
  },

  getTeams: function () {
    return request(this.url);
  }
}

module.exports = teams;
