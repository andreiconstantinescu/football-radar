// Create a fake global `window` and `document` object:
var jsdom = require('mocha-jsdom');

// Replace BigComplicatedComponent.js with a stub component.
global.reactModulesToStub = [
  'StatsTable.jsx'
];

var assert = require('assert');
var React = require('react/addons');
var StatsTable = require('../../frontend/components/StatsTable.jsx');
var StatsTableRow = require('../../frontend/components/StatsTableRow.jsx');
var TestUtils = React.addons.TestUtils;
var league = require('../common/league.json');

describe('StatsTable Component', function() {
  jsdom();


  it('league state must be an object', function() {
    var renderedComponent = TestUtils.renderIntoDocument(
        <StatsTable league={league}/>
      );

    assert.equal(typeof renderedComponent.props.league, 'object');
  });

  it('should have ' + league.length + ' entries', function () {
    var renderedComponent = TestUtils.renderIntoDocument(
        <StatsTable premierLeague={league}/>
      );

    assert.equal(renderedComponent.props.premierLeague.length, league.length);
  })
});
