import Ember from 'ember';

export default Ember.Component.extend({
  thisButton: false,
  actions: {
  thisButton() {
    this.set('thisButton', true);
  },
  addPlace() {
    var params = {
      location: this.get('location'),
      type: this.get('type'),
      image: this.get('image')
    };
    this.set('thisButton', false);
    this.sendAction('sendPlace', params);
  }
}
});
