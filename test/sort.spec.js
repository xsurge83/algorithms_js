var expect = require('expect.js');
var sort = require('../sorting/sort');

var start = process.hrtime();
var elapsed_time = function (note) {
  var precision = 3; // 3 decimal places
  if (note) {
    var elapsed = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
    console.log(process.hrtime(start)[0] + " s, " + elapsed.toFixed(precision) + " ms - " + note+ '\n'); // print message + time
  }
  start = process.hrtime(); // reset the timer
}

var generateArray = function (len, range) {
  if (typeof range === 'undefined') {
    range = 10;
  }
  var array = new Array();
  for (var index = 0; index < len; index++) {
    array.push(Math.floor(Math.random() * 10) + 1);
  }
  return array;
}

var PERF_ITEMS = generateArray(10000, 100);



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
    var items = []
    sort.binaryInsertionSort(PERF_ITEMS);

    elapsed_time();
    sort.binaryInsertionSort(PERF_ITEMS);
    elapsed_time('binary insertion sort took');
    done();
  });
});

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
    var items = [];
    elapsed_time();
    sort.insertionSort(PERF_ITEMS);
    elapsed_time('insertion sort took');

    elapsed_time();
    sort.insertionSort(PERF_ITEMS);
    elapsed_time('insertion sort took');
    done();

  });
});