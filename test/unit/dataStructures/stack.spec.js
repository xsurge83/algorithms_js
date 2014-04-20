var expect = require('expect.js');
var Stack = require('./../../../lib/index').dataStructures.Stack;

describe('Stack', function () {
  it('should push to stack', function () {
    var stack = new Stack();
    stack.push(2);
    expect(stack.peek()).to.eql(2);
  });
  it('should pop from stack', function () {
    var stack = new Stack();
    stack.push(2);
    stack.pop();

    expect(stack.peek()).to.eql(null);
  });
});

