import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | youtube', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:youtube');
    assert.ok(route);
  });
});
