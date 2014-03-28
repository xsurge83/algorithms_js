/**
 * Perform better the insertion sort only when comparison is expensive
 * @param items
 * @returns {*}
 */
var insertionSortBinary = function insertionSortBinary(items) {
  var temp, middle, j, i, key, left, right;

  for (i = 1; i < items.length; ++i) {
    key = items[i],
      left = 0, right = i;

    while (left < right) {
      middle = Math.floor((left + right) / 2);
      if (items[middle] < key) {
        left = middle + 1
      } else {
        right = middle;
      }
    }
    temp = items[i];
    for (j = i; j > left; --j) {
      // swap
      items[j] = items[j - 1];
    }
    items[left] = temp;
  }
  return items;
};
module.exports = insertionSortBinary;


