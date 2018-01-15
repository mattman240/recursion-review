// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var output = [];
  
  var classFinder = function(currentElement) {
    var currentClasses = currentElement.classList;
    var children = currentElement.childNodes;

    var pushed = false;
    for (var currentClass in currentClasses) {

      if (currentClasses[currentClass] === className && !pushed) {
        output.push(currentElement);
        pushed = true;
      }
    }
    
    if (children !== undefined) {
      for (var key in children) {
        var currentChild = children[key];
        
        classFinder(currentChild);
      }
    }
    
  };
  
  classFinder(document.body);
  return output;
  
};
