'use strict'
var React = require('react');

var StatsTableRow = React.createClass({
  render: function () {
    return (
      <tr>
        <td><strong>{this.props.prosition}</strong></td>
        <td><strong>{this.props.teamInfo.teamName}</strong></td>
        <td>{this.props.teamInfo.played}</td>
        <td>{this.props.teamInfo.won}</td>
        <td>{this.props.teamInfo.drawn}</td>
        <td>{this.props.teamInfo.lost}</td>
        <td>{this.props.teamInfo.goals.for}</td>
        <td>{this.props.teamInfo.goals.against}</td>
        <td>{this.props.teamInfo.goals.difference}</td>
        <td><strong>{this.props.teamInfo.currentPoints}</strong></td>
      </tr>
    );
  }
});

module.exports = StatsTableRow;
