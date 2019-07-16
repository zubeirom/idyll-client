import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | hacker-news', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:hacker-news');
    assert.ok(controller);
  });
});
