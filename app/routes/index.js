import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return Ember.RSVP.hash({
    places: this.store.findAll('place'),
    reviews: this.store.findAll('review')
  });
  },
  actions: {
  sendPlace(params) {
  var newPlace = this.store.createRecord('place', params);
  newPlace.save();
  this.transitionTo('index');
  },
  saveReview(params) {
   var newReview = this.store.createRecord('review', params);
   var place = params.place;
   place.get('reviews').addObject(newReview);
   newReview.save().then(function() {
     return place.save();
   });
   this.transitionTo('index');
  }
  }
});
