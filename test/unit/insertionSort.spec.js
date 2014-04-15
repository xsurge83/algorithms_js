var expect = require('expect.js'),
  sorts = require('../../lib').sorts;

describe('sorts', function () {

  describe('insertion sorts', function () {
    it('should sorts random values', function () {
      var items = [4, 1, 4, 9, 0, 12, 23, 33];
      var result = sorts.insertionSort(items);
      expect(result).to.eql([ 0, 1, 4, 4, 9, 12, 23, 33 ]);
    });

    it('should sorts opposite order values', function () {
      var items = [33, 23, 14, 9, 12, 3, 1];
      expect(sorts.insertionSort(items)).to.eql([ 1, 3, 9, 12, 14, 23, 33 ]);
    });

    it('should handle empty array', function () {
      var items = [];
      expect(sorts.insertionSort(items)).to.eql([ ]);
    });
  });

  describe('binary insertion sorts', function () {

    it('should sorts random values', function () {
      var items = [4, 1, 4, 9, 0, 12, 23, 33];
      var result = sorts.insertionSortBinary(items);
      expect(result).to.eql([ 0, 1, 4, 4, 9, 12, 23, 33 ]);
    });

    it('should sorts opposite order values', function () {
      var items = [33, 23, 14, 9, 12, 3, 1];
      expect(sorts.insertionSortBinary(items)).to.eql([ 1, 3, 9, 12, 14, 23, 33 ]);
    });

    it('should handle empty array', function () {
      var items = [];
      expect(sorts.insertionSortBinary(items)).to.eql([ ]);
    });

  });
});
