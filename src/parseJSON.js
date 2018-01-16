// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here

  var output; 
  
  if (json[0] === '[') {
    output = [];
    var arrayData = json.slice(1, json.length - 2);
    arrayData.split(',').concat(output);
  }
  
  if (json[0] === '{') {
    output = {};
    var objData = json.slice(1, json.length - 1);
    var objPairs = objData.split(':');
    console.log('our pairs', objPairs);
    var finalSplit = objPairs.join(',').split(',');
    console.log('finalString: ', finalSplit);
    
    for (var index = 0; index < finalSplit.length; index += 2) {
      output[finalSplit[index]] = finalSplit[index + 1];
    }
  }
  
  // var parse = function(string) {
    
  //   for (var index = 0; index < string.length; index ++) {
  //     if (string[index] === '[') {
  //       var newSlice = string.slice( index + 1);
  //       parse(newSlice);
  //     }
  //   if (json[0] === '[') {
  //     output = [];
  //     string.split(',')
  //   } 
    
  //   if (json[0] === '{') {
  //     output = {};
  //   }
    
  // };
  // parse(json);
  
  return output;

};
