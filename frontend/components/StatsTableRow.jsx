'use strict'
var React = require('react');

var StatsTableRow = React.createClass({
  render: function () {
    return (
      <tr>
        <td><strong>{this.props.currentPosition}</strong></td>
        <td><strong>{this.props.teamInfo.name}</strong></td>
        <td>{this.props.teamInfo.played}</td>
        <td>{this.props.teamInfo.won}</td>
        <td>{this.props.teamInfo.drawn}</td>
        <td>{this.props.teamInfo.lost}</td>
        <td>{this.props.teamInfo.goalsFor}</td>
        <td>{this.props.teamInfo.goalsAgainst}</td>
        <td>{this.props.teamInfo.goalsDifference}</td>
        <td><strong>{this.props.teamInfo.currentPoints}</strong></td>
      </tr>
    );
  }
});

module.exports = StatsTableRow;
