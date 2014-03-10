var expect = require('expect.js'),
  sort = require('../sorting/sort'),
  Timer = require('../util/timer');

var generateArray = function (len, range) {
    if (typeof range === 'undefined') {
      range = 10;
    }
    var array = new Array();
    for (var index = 0; index < len; index++) {
      array.push(Math.floor(Math.random() * 10) + 1);
    }
    return array;
  },
  NUM_ITEMS = generateArray(100000, 100);


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

    it('should test performance', function (done) {
      sort.insertionSort(NUM_ITEMS);

      var timer = new Timer().start();
      sort.insertionSort(NUM_ITEMS);
      timer.end('insertion sort took: ');
      done();
    });
  });

  describe('binary insertion sort', function () {
    it('should sort random values', function () {
      var items = [4, 1, 4, 9, 0, 12, 23, 33];
      var result = sort.binaryInsertionSort(items);
      expect(result).to.eql([ 0, 1, 4, 4, 9, 12, 23, 33 ]);
    });

    it('should sort opposite order values', function () {
      var items = [33, 23, 14, 9, 12, 3, 1];
      expect(sort.binaryInsertionSort(items)).to.eql([ 1, 3, 9, 12, 14, 23, 33 ]);
    });

    it('should handle empty array', function () {
      var items = [];
      expect(sort.binaryInsertionSort(items)).to.eql([ ]);
    });

    it('should test performance', function (done) {
      sort.binaryInsertionSort(NUM_ITEMS);
      var timer = new Timer().start();
      sort.binaryInsertionSort(NUM_ITEMS);
      timer.end('binary insertion sort took: ');
      done();
    });
  });
});
