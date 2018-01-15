// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  
  var returnString = '';
  
  var helperFunction = function (obj) {
    
    if (obj === null) {
      returnString += 'null';
      
    } else if (Array.isArray(obj) === true) {
      returnString += '[';
      obj.forEach(function (index) {
        helperFunction(index);
        if (obj.length > 1 && index !== obj[obj.length - 1]) {
          returnString += ',';
        }
      });
      returnString += ']';
      
    } else if (typeof obj === 'object') {
      returnString += '{';
      var objKeys = Object.keys(obj);
      var objLength = objKeys.length;
      for (var key in obj) {
        if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
          returnString += '"';
          returnString += key;
          returnString += '":';
          helperFunction(obj[key]);
          if (objLength > 1 && key !== objKeys[objLength - 1]) {
            returnString += ',';
          }
        }
      }
      returnString += '}';
      
    } else if (typeof obj === 'string') {
      returnString += '"';
      returnString += obj;
      returnString += '"';
      
    } else {
      returnString += obj;
    }
  };
  
  helperFunction(obj);

  return returnString;
};
