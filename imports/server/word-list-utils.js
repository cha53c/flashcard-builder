

var words = ['one', 'two', 'three'];
var index = 0;

resetIndex = function(){
  index=0;
}

getNextWord = function(){
   // TODO: read from word list
   if(index >= words.length){
     return -1;
     index = 0;
   }
   return words[index++];
}
