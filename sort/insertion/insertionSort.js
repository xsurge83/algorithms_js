
  'use strict'
  var insertionSort = function (items) {
    var j, i, key;
    for (i = 0; i < items.length; i++) {
      key = items[i];

      for (j = i-1; 0 <= j && items[j]> key; j--) {
        // swap
        items[j+1]= items[j];

      }
      items[j+1] = key;
    }
    return items;
  };
  module.exports = insertionSort;
