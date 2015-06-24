var React = require('react');
var StatsTable = require('./StatsTable')

var MainView = React.createClass({
  getInitialState: function () {
    return {
      'premierLeague': []
    };
  },

  setLeague: function () {
    this.setState({
      'premierLeague': this.props.premierLeagueService.league
    });
  },

  componentDidMount: function () {
    this.props.premierLeagueService.initialise(this.setLeague);
  },

  render: function () {
    return (
      <div>
        <StatsTable premierLeague={this.state.premierLeague}></StatsTable>
      </div>
    )
  }
});

module.exports = MainView;
