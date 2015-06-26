'use strict'
var React = require('react');

var StatsTableRow = React.createClass({

  render: function () {
    return (
      <tr className={this.props.className}>
        <td>{this.props.currentPosition}</td>
        <td>{this.props.teamInfo.name}</td>
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
