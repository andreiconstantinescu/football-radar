'use strict';

var React = require('react');
var _ = require('lodash');
var Row = require('./StatsTableRow');

var StatsTable = React.createClass({
  getRows: function () {
    var currentPosition = 0;
    var rows = _.map(this.props.premierLeague,function (info) {
      currentPosition++;
      return (<Row teamInfo={info} currentPosition={currentPosition} key={currentPosition}></Row>)
    });

    return rows;
  },

  render: function () {
    return (
      <table className="table table-bordered" >
        <thead>
            <tr>
                <th>Position</th>
                <th>Team</th>
                <th>Played</th>
                <th>Wins</th>
                <th>Draws</th>
                <th>Loses</th>
                <th>Goalf For</th>
                <th>Goals Against</th>
                <th>Goal Difference</th>
                <th>Points</th>
            </tr>
        </thead>
        <tbody>
        {this.getRows()}
        </tbody>
      </table>
    )
  }
})

module.exports = StatsTable;
