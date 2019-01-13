describe('dictionary utils', function () {
  it('builds new url', function () {
    var res = buildURL('myurl', 'myword');
    assert.equal(res, 'myurl/myword');
  })
})
