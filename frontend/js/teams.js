'use strict'
var $ = require('jquery');

var teams = {
  init: function (url) {
    this.url = url || 'http://127.0.0.1:8080/teams';
  },

  getTeams: function () {
    return $.get(this.url);
  }
}

module.exports = teams;
