import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var place = this.store.findRecord('place', params.place_id);
    return Ember.RSVP.hash({
      place : place
    });
  },
  actions: {
  saveReview(params) {
   var newReview = this.store.createRecord('review', params);
   var place = params.place;
   place.get('reviews').then(function(reviews) {
     reviews.addObject(newReview);
   });
   newReview.save();
   this.transitionTo('place', place);
}
}
});
