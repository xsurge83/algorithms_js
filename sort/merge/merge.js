var mergeSort, merge;
/*
 5412
 */
mergeSort = function (items, low, high) {
  var middle;
  if (low === undefined && high === undefined) {
    low = 0, high = items.length-1;
  }
  middle = Math.floor((high + low) / 2);
  console.log('mergeSort low %j middle %j high %j', low, middle, high);
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
  var leftIndex = low , rightIndex = middle + 1, currentIndex, tempElems = [],
    remaining, index;
  for (currentIndex = 0; currentIndex < items.length; currentIndex++) {
    tempElems.push(items[currentIndex]);
  }

  currentIndex = low;

  while (leftIndex <= middle && rightIndex <= high) {
    if (tempElems[leftIndex] <= tempElems[rightIndex]) {
      items[currentIndex] = tempElems[leftIndex++];
    } else {
      items[currentIndex] = tempElems[rightIndex++];
    }
    currentIndex++;
  }
  remaining = middle - leftIndex;
  for (index = 0; index <= remaining; index++) {
    items[index + currentIndex] = tempElems[leftIndex+index];
  }
  console.log('test %j', items);
};

module.exports = {
  sort: mergeSort,
  sortIterative: function () {
    //todo:
  }
};