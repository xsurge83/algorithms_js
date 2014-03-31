var _ = require('underscore'),
  dataGenerator = require('./../helpers/dataGenerator'),
  sorts = require('../../lib').sorts,
  async = require('async');
TEST_ITEMS = dataGenerator.generateArray(10000, 100);

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
      sorts.merge.sort(itemsToSort);
      cb();
    });
  });
});


/**
 * Run the specified function, capturing time elapsed.
 *
 * @param  {[type]}   description [description]
 * @param  {Function} fn          [description]
 * @return {[type]}               [description]
 */
function benchmark(description, numOfWarms, fn) {

  if (_.isFunction(numOfWarms) && _.isUndefined(fn)) {
    fn = numOfWarms;
    numOfWarms = 0;
  }

  it(description, function (cb) {
    var self = this;

    // console.time(description);
    async.whilst(function () {
        return numOfWarms > 0;
      },
      function (callback) {
        numOfWarms--;
        console.log('call');
        fn.call(self, callback);
      },
      function (error) {
        var startedAt = self.microtime.now();

        fn.apply(this, [function _callback() { //callback that will be applied when we are done
          var _result = {}, finishedAt;

          // If a `comment` or `expected` was provided, harvest it
          _result.expected = self.expected;
          self.expected = null;
          _result.comment = self.comment;
          self.comment = null;
          finishedAt = self.microtime.now();
          _result.duration = finishedAt - startedAt;
          _result.benchmark = description;

          // console.log('finished ',_result);
          self.benchmarks.push(_result);
          if (cb)
            cb.apply(Array.prototype.slice.call(arguments));
        }]);

      })


  });
}


/**
 * Use in jasmine's `beforeEach`
 *
 * @this {Array} benchmarks
 * @this {Object} microtime
 */
function setupBenchmarks() {
  this.microtime = require('microtime');
  this.benchmarks = [];
}


/**
 * Use in jasmine's `afterEach`
 *
 * @this {Array} benchmarks
 * @this {Object} microtime
 */
function reportBenchmarks() {
  var _ = require('underscore');

  require('colors');

  var output = '\n\nBenchmark Report ::\n';
  output += _.reduce(this.benchmarks, function (memo, result) {

    // Convert to ms-
    var ms = (result.duration / 1000.0);

    // round to 0 decimal places
    function _roundDecimalTo(num, numPlaces) {
      return +(Math.round(num + ('e+' + numPlaces)) + ('e-' + numPlaces));
    }

    ms = _roundDecimalTo(ms, 2);


    var expected = result.expected || 1000;

    // threshold: the "failure" threshold
    var threshold = result.expected;

    var color =
      (ms < 1 * expected / 10) ? 'green' :
        (ms < 3 * expected / 10) ? 'green' :
          (ms < 6 * expected / 10) ? 'cyan' :
            (ms < threshold) ? 'yellow' :
              'red';

    ms += 'ms';
    ms = ms[color];

    // Whether to show expected ms
    var showExpected = true; // ms >= threshold;

    return memo + '\n ' +
      (result.benchmark + '') + ' :: '.grey + ms +

      // Expected ms provided, and the test took quite a while
      (result.expected && showExpected ? '\n   (expected ' + expected + 'ms' +
        (result.comment ? ' --' + result.comment : '') +
        ')' :

        // Comment provided - but no expected ms
        (result.comment ? '\n   (' + result.comment + ')\n' : '')
        ).grey;
  }, '');

  // Log output (optional)
  console.log(output);
}