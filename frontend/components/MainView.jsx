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
      'premierLeague': this.props.premierLeague.currentLeague
    });
  },

  componentDidMount: function () {
    this.props.premierLeague.init(this.setLeague);
  },

  render: function () {
    return (
      <div className='container'>
        <h1>GG</h1>
        <StatsTable premierLeague={this.state.premierLeague}></StatsTable>
      </div>
    )
  }
});

module.exports = MainView;
