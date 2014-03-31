/**
 * Generate random array
 * @param {int} len - length of the array
 * @param {int} range - maximum range for each element in array
 * @returns {Array}
 * @private
 */
var _generateArray = function (len, range) {
    if (typeof range === 'undefined') {
      range = 10;
    }
    var array = new Array();
    for (var index = 0; index < len; index++) {
      array.push(Math.floor(Math.random() * range) + 1);
    }
    return array;
  };

module.exports = {
  generateArray : _generateArray
};