var sorts = require('./../../../lib/index').sorts;
var expect = require('expect.js');

describe('merge', function () {
  it('should sorts random values', function () {
    var items = [4, 1, 4, 9, 0, 12, 23, 33], result;
    result = sorts.mergeSort.sort(items);
    expect(result).to.eql([ 0, 1, 4, 4, 9, 12, 23, 33 ]);
  });
  it('should sorts opposite order values', function () {
    var items = [33, 23, 14, 9, 12, 3, 1];
    expect(sorts.mergeSort.sort(items)).to.eql([ 1, 3, 9, 12, 14, 23, 33 ]);
  });

  it('should handle empty array', function () {
    var items = [];
    expect(sorts.mergeSort.sort(items)).to.eql([ ]);
  });
});
