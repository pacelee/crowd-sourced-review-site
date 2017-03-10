import Ember from 'ember';

export function reviewPopularity(params) {
  var number = params[0];
  if(number.get('reviews').get('length') >= 5) {
    return Ember.String.htmlSafe("<span class='glyphicon glyphicon-fire'></span>");
  }
}

export default Ember.Helper.helper(reviewPopularity);
