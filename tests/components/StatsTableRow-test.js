// Create a fake global `window` and `document` object:
var jsdom = require('mocha-jsdom');

// Replace BigComplicatedComponent.js with a stub component.
global.reactModulesToStub = [
  'StatsTableRow.jsx'
];

var assert = require('assert');
var React = require('react/addons');
var StatsTableRow = require('../../frontend/components/StatsTableRow.jsx');
var TestUtils = React.addons.TestUtils;
var league = require('../common/league.json');

describe('StatsTableRow Component', function() {
  jsdom();


  it('should print the props into the table', function() {
    var position = 1;
    var renderedComponent = TestUtils.renderIntoDocument(
        <StatsTableRow teamInfo={league[0]} currentPosition={position}/>
      );

      var el = TestUtils.findRenderedDOMComponentWithTag(
              renderedComponent, 'strong');

      assert(el.getDOMNode().textContent, league[0].currentPoints);
        });
});
