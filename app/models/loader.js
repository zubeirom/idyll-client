import DS from 'ember-data';

export default DS.Model.extend({
  loader: DS.attr('boolean', { defaultValue: true })
});
