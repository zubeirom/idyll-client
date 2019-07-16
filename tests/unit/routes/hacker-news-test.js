import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | hacker-news', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:hacker-news');
    assert.ok(route);
  });
});
