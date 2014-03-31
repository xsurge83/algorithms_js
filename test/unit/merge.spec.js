var sorts = require('./../../lib').sorts;

describe('merge', function () {
  it('should sorts random values', function () {
    var items = [5,4,2,1];
    sorts.merge.sort(items);
    console.log('result %j', items);
  });
});
