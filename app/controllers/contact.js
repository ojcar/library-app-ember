import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',
  message: '',
  // messageLength: Ember.computed.length('message'),
  isValidEmailAddress: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isValidMessage: Ember.computed.gte('message.length', 5),
  isValid: Ember.computed.and('isValidEmailAddress', 'isValidMessage'),
  isDisabled: Ember.computed.not('isValid'),
  actions: {
    sendMessage: function() {
      this.set('responseMessage', `Message sent, thank you ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
