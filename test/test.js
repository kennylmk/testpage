const asset = require('assert')
// var expect    = require("chai").expect;
var displayText = require("../main.js")

describe('test', function() {
    it('Button click to display text', function() {
        var result=displayText.displayText();
        var msg = "Hello World for CircleCI";
        asset.equal(result,'Hello World for CircleCI')
        // expect(displayText()).toBe('Hello World for CircleCI')
    //   assert(1+1===2)
    //   assert.equal(1+1, 2)
    })
  })
