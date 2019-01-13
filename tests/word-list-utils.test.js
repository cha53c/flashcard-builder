import assert from "assert";
import '/imports/server/word-list-utils.js';

describe('word list utils', function () {
  it('gets next word in list', function () {
    var res1 = getNextWord();
    var res2 = getNextWord();
    assert.equal(res1, 'one');
    assert.equal(res2, 'two');
  })
  it('returns -1 when all items have been read', function () {
    resetIndex();

    getNextWord();
    getNextWord();
    getNextWord();
    var res = getNextWord();
    assert.equal(res, -1);

  })
});
