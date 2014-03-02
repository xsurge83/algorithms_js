(function (exports) {
  /**
   * Execute insertion sort
   * @param {Array} items
   * @returns {Array}
   */
  exports.sort = function (items) {
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

})(typeof exports === 'undefined' ? this['insertionSort'] = {} : exports);