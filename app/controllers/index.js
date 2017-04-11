import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',

  // isDisabled: Ember.computed('emailAddress', function() {
  //   return this.get('emailAddress') === '';
  // }),
  // isDisabled: Ember.computed.empty('emailAddress'),

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  // actualEmailAddress: Ember.computed('emailAddress', function() {
  //   console.log('actualEmailAddress called', this.get('emailAddress'))
  // }),

  // emailAddressChanged: Ember.observer('emailAddress', function() {
  //   console.log('observer called', this.get('emailAddress'))
  // })

  actions: {
    saveInvitation() {
      const email = this.get('emailAddress');
      const newInvitation = this.store.createRecord('invitation', { email: email });
      newInvitation.save().then((response) => {
        this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')} - ${response.get('id')}`);
        this.set('emailAddress', '');
      })
    }
  }
});
