'use strict';

var React = require('react');
var _ = require('lodash');
var Row = require('./StatsTableRow');

var StatsTable = React.createClass({
  getRows: function () {
    var currentPosition = 0;
    var rows = _.map(this.props.premierLeague,function (info) {
      currentPosition++;
      var currentClass = '';
      if (currentPosition <= 3) {
        currentClass = 'success'
      } else if (currentPosition > 17 && currentPosition < 21) {
        currentClass = 'danger'
      }
      return (<Row className={currentClass} teamInfo={info} currentPosition={currentPosition} key={currentPosition} ref={currentPosition}></Row>)
    });

    return rows;
  },

  render: function () {
    return (
      <div className="table-responsive">
        <table className="table table-bordered table-striped text-center">
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
      </div>
    )
  }
})

module.exports = StatsTable;
