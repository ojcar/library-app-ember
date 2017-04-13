import Ember from 'ember';

export function libraryTitle([libraryName]) {
  return `First Level Helper -> ${libraryName}`;
}

export default Ember.Helper.helper(libraryTitle);
