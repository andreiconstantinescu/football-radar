// Create a fake global `window` and `document` object:
var jsdom = require('mocha-jsdom');

// Replace BigComplicatedComponent.js with a stub component.
global.reactModulesToStub = [
  'MainView.jsx'
];

var assert = require('assert');
var React = require('react/addons');
var MainView = require('../../frontend/components/MainView.jsx');
var TestUtils = React.addons.TestUtils;
var league = require('../../frontend/js/premier-league-service.js');

describe('MainView Component', function() {
  jsdom();


  it('league state must be an object', function() {
    var renderedComponent = TestUtils.renderIntoDocument(
        <MainView league={league}/>
      );

    assert.equal(typeof renderedComponent.props.league, 'object');
  });
});
