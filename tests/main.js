import assert from "assert";
import '/server/main.js'

describe("flashcard-builder", function () {
  it("package.json has correct name", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "flashcard-builder");
  });

  if (Meteor.isClient) {
    it("client is not server", function () {
      assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it("server is not client", function () {
      assert.strictEqual(Meteor.isClient, false);
    });
    describe('dictionary utils', function () {
      it('builds new url', function () {
        var res = buildURL('myurl', 'myword');
        assert.equal(res, 'myurl/myword');
      });
    });
  }
});
