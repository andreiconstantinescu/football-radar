'use strict';
var webSocket = require('ws');

var games =  {
  init: function (uri) {
    this.uri = uri || 'ws://127.0.0.1:8080/games';
  },

  getGames: function () {
    this.webSocket = new webSocket(this.uri);
  }
};

module.exports = games;
