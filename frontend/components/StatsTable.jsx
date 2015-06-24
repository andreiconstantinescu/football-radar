'use strict';

var React = require('react');
var _ = require('lodash');
var Row = require('./StatsTableRow');

var StatsTable = React.createClass({
  getRows: function () {
    var rows = [];
    var currentPosition = 0;

    _.map(this.props.premierLeague,function (info) {
      currentPosition++;
      rows.push(<Row teamInfo={info} currentPosition={currentPosition}></Row>)
    }).bind(this);

    return rows;
  },

  render: function () {
    return (
      <table className="table table-bordered" >
        <thead>
            <tr>
                <th>Position</th>
                <th>Team</th>
                <th>Pld</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GF</th>
                <th>GA</th>
                <th>GD</th>
                <th>Pts</th>
            </tr>
        </thead>
        <tbody>
        {this.getRows()}
        </tbody>
      </table>
    )
  }
})
