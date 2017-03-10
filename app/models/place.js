import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr(),
  location: DS.attr(),
  image: DS.attr(),
  reviews: DS.hasMany('review')
});
