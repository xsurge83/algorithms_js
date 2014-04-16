var _ = require('underscore'),
  dataGenerator = require('./../helpers/dataGenerator'),
  sorts = require('../../lib').sorts,
TEST_ITEMS = dataGenerator.generateArray(100000, 100),
  benchmark = require('../helpers/benchmarkDriver').benchmark,
  setupBenchmarks = require('../helpers/benchmarkDriver').setupBenchmarks,
  reportBenchmarks = require('../helpers/benchmarkDriver').reportBenchmarks;

describe('benchmarks', function () {
  describe('sorts', function () {
    var itemsToSort;
    beforeEach(function setupTest() {
      itemsToSort = _.clone(TEST_ITEMS);
      setupBenchmarks.call(this);
    });
    afterEach(reportBenchmarks);

    benchmark('should sort with insertion sort', 0, function (cb) {
      sorts.insertionSort(itemsToSort);
      cb();
    });
    benchmark('should sort with binary insertion sort', 0, function (cb) {
      sorts.insertionSortBinary(itemsToSort);
      cb();
    });
    benchmark('should sort with merge sort', 0, function (cb) {
      sorts.mergeSort.sort(itemsToSort);
      cb();
    });
    benchmark('should sort with merge sort2', 0, function (cb) {
      sorts.mergeSort2.sort(itemsToSort);
      cb();
    });
    benchmark('should sort with merge sort3', 0, function (cb) {
      sorts.mergeSort3.sort(itemsToSort);
      cb();
    });
  });
});

