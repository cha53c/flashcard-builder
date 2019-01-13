import assert from "assert";
import '/imports/server/dictionary-utils';

describe('dictionary utils', function () {
  it('builds new url', function () {
    var res = buildURL('myurl', 'myword');
    assert.equal(res, 'myurl/myword');
  })
});
