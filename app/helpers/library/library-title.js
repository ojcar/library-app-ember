import Ember from 'ember';

export function libraryLibraryTitle([libraryName]) {
  return `Subdirectory Helpers -> ${libraryName}`;
}

export default Ember.Helper.helper(libraryLibraryTitle);
