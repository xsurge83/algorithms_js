var mergeSort, merge;
/*
 merge sorts
 */
mergeSort = function (items, low, high) {
  var middle;
  if (low === undefined && high === undefined) {
    low = 0, high = items.length - 1;
  }
  middle = Math.floor((high + low) / 2);

  if (low < high) {
    mergeSort(items, low, middle);
    mergeSort(items, middle + 1, high);
    merge(items, middle, low, high);
  }
  return items;
};
/*
 */
merge = function (items, middle, low, high) {
  var helper = [], leftIndex = low , rightIndex = middle + 1, currentIndex = low,
    remaining, index;

  //todo: we don't need to copy all the elements
  for (index = 0; index < items.length; index++) {
    helper.push(items[index]);
  }

  while (leftIndex <= middle && rightIndex <= high) {
    if (helper[leftIndex] <= helper[rightIndex]) {
      items[currentIndex] = helper[leftIndex++];
    } else {
      items[currentIndex] = helper[rightIndex++];
    }
    currentIndex++;
  }
  remaining = middle - leftIndex;
  for (index = 0; index <= remaining; index++) {
    items[index + currentIndex] = helper[leftIndex + index];
  }
};

module.exports = {
  sort: mergeSort,
  sortIterative: function () {
    //todo:
  }
};