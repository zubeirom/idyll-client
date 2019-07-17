import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | google', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:google');
    assert.ok(route);
  });
});
