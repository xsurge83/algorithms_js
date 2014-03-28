var expect = require('expect.js'),
  sort = require('../sort/sort'),
  Timer = require('../util/timer');
  _ = require('underscore');

var generateArray = function (len, range) {
    if (typeof range === 'undefined') {
      range = 10;
    }
    var array = new Array();
    for (var index = 0; index < len; index++) {
      array.push(Math.floor(Math.random() * range) + 1);
    }
    return array;
  },
  TEST_ITEMS = generateArray(1000, 100);


describe('sort', function(){

  describe('insertion sort', function () {
    it('should sort random values', function () {

      var items = [4, 1, 4, 9, 0, 12, 23, 33];

      var result = sort.insertionSort(items);

      expect(result).to.eql([ 0, 1, 4, 4, 9, 12, 23, 33 ]);
    });
    it('should sort opposite order values', function () {
      var items = [33, 23, 14, 9, 12, 3, 1];
      expect(sort.insertionSort(items)).to.eql([ 1, 3, 9, 12, 14, 23, 33 ]);
    });

    it('should handle empty array', function () {
      var items = [];
      expect(sort.insertionSort(items)).to.eql([ ]);
    });

    it('should test performance', function () {

      sort.insertionSort(_.clone(TEST_ITEMS));

      var items = _.clone(TEST_ITEMS);
      var timer = new Timer().start();
      sort.insertionSort(items);
      timer.end('insertion sort took: ');

    });
  });

  describe('binary insertion sort', function () {
    it('should sort random values', function () {
      var items = [4, 1, 4, 9, 0, 12, 23, 33];
      var result = sort.insertionSortBinary(items);
      expect(result).to.eql([ 0, 1, 4, 4, 9, 12, 23, 33 ]);
    });

    it('should sort opposite order values', function () {
      var items = [33, 23, 14, 9, 12, 3, 1];
      expect(sort.insertionSortBinary(items)).to.eql([ 1, 3, 9, 12, 14, 23, 33 ]);
    });

    it('should handle empty array', function () {
      var items = [];
      expect(sort.insertionSortBinary(items)).to.eql([ ]);
    });

    it('should test performance', function () {
      sort.insertionSortBinary(_.clone(TEST_ITEMS));
      var items = _.clone(TEST_ITEMS);
      var timer = new Timer().start();
      sort.insertionSortBinary(items);
      timer.end('binary insertion sort took: ');
    });
  });
});
