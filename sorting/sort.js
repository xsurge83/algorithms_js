(function (exports) {
  /**
   * Execute insertion sort
   * @param {Array} items
   * @returns {Array}
   */
  exports.insertionSort = function (items) {
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

  exports.binaryInsertionSort = function(items){
    var temp, middle, j, i, key, left, right;

    for (i = 1; i < items.length; ++i) {
      key = items[i],
      left = 0, right = i;

      while(left<right){
        middle = Math.floor((left+right)/2);
        if(items[middle]<key){
          left = middle + 1
        } else {
          right = middle;
        }
      }

      temp = items[i];
      for (j = i; j > left; --j) {
        // swap
        items[j] = items[j-1];
      }
      items[left] = temp;
    }
    return items;
  }

})(typeof exports === 'undefined' ? this['sort'] = {} : exports);