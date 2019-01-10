import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  hello(){
    console.log('Hello World');
    HTTP.call('GET', 'https://od-api.oxforddictionaries.com:443/api/v1/entries/en/ace',
    { headers:
      {
      'Accept': 'application/json',
      'app_id': 'blah',
      'app_key': 'blah'
      }
    }, function(err, res){
      if(err){
        console.log(err);
      } else {
        console.log(res);
      }
    });
  }
});
