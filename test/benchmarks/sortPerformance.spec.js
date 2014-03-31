var _ = require('underscore'),
  dataGenerator = require('./../helpers/dataGenerator'),
  Timer = require('./../helpers/timer'),
  sorts = require('../../lib').sorts,
  TEST_ITEMS = dataGenerator.generateArray(10000, 100);

describe('benchmarks', function () {
  describe('sorts', function () {
    describe('insertion', function () {
      it('should test performance', function () {
        sorts.insertionSort(_.clone(TEST_ITEMS));
        var items = _.clone(TEST_ITEMS);
        var timer = new Timer().start();
        sorts.insertionSort(items);
        timer.end('insertion sorts took: ');
      });

      it('should test performance', function () {
        sorts.insertionSortBinary(_.clone(TEST_ITEMS));
        var items = _.clone(TEST_ITEMS);
        var timer = new Timer().start();
        sorts.insertionSortBinary(items);
        timer.end('binary insertion sorts took: ');
      });
    });
  });
});