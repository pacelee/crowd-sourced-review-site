import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
  reviewFormShow() {
    this.set('addNewReview', true);
  },
  saveReview() {
   var params = {
     author: this.get('author'),
     rating: parstInt(this.get('rating')),
     content: this.get('content'),
     place: this.get('place')
   };
   this.set('addNewReview', false);
   this.sendAction('saveReview', params);
 }
}
});
