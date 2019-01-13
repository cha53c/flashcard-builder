import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

import '/imports/server/dictionary-utils';
import '/imports/server/word-list-utils';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  hello(){
    console.log('build cards');
    resetIndex();
    while((word = getNextWord()) != -1){
      getDefinitionFromOED(word);
      console.log('next entry');
      //console.log(entry);
    }
  }
});
