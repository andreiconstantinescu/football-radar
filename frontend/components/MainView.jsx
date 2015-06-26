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
    var style = {
      'title': {
        'padding':  '20px 0'
      },
      'credits': {
        'float': 'right'
      },
      'hr': {
        'margin': 0
      },
      'container': {
        'fontFamily': 'Source Sans Pro'
      }
    }
    return (
      <div className='container' style={style.container}>
        <h2 className='text-center' style={style.title}>2011/12 English Premier League season</h2>
        <StatsTable premierLeague={this.state.premierLeague}></StatsTable>
        <hr style={style.hr}></hr>
        <small>
          <span className='text-left'>Coded by <a href='https://github.com/andreiconstantinescu'>Andrei Constantinescu</a>.</span>
          <span style={style.credits}><a href='andreiconstantinescu/football-radar'>Source code</a>.</span>
        </small>
      </div>
    )
  }
});

module.exports = MainView;
