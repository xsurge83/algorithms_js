var sort = require('../sort/sort');
describe('merge', function () {
  it('should sort random values', function () {
    var items = [5,4,2,1];
    sort.merge.sort(items);
    console.log('result %j', items);
  });
});
