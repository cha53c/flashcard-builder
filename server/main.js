import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  hello(){
    console.log('Hello World');

    getDefinitionFromOED();

  }
});

function getDefinitionFromOED(){

  var newUrl = buildURL(Meteor.settings.oed.entries_url, 'orca');
  console.log('newUrl: ' + newUrl);

  HTTP.call('GET', newUrl,
  { headers:
    {
    'Accept': 'application/json',
    'app_id': Meteor.settings.oed.app_id,
    'app_key': Meteor.settings.oed.app_key
    }
  }, function(err, res){
    if(err){
      console.log(err);
    } else {
      console.log(res);
    }
  });
}

buildURL = function (url, word){
  // // TODO: is there a built are way to log params?
  console.log('params:' + url +' ' + word);

  return url.concat('/'+ word);
}
