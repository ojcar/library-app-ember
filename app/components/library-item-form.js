import Ember from 'ember';

export default Ember.Component.extend({
  buttonClicked(param) {
    this.sendAction('action', param);
  }
});
