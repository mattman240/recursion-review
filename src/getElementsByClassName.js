// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var output = [];
  
  var classFinder = function(className, currentElement) {
    var currentClasses = currentElement.classList;
    var children = currentElement.childNodes;
    console.log(currentClasses);
    
    for (var currentClass in currentClasses) {
      console.log('current Class:', currentClass, 'className :', className);
      if (currentClasses[currentClass] === className) {
        output.push(currentElement);
      }
    }
    
    if (children !== undefined) {
      // console.log('test')
      for (var key in children) {
        var currentChild = children[key];
        
        classFinder(className, currentChild);
      }
    }
    
  };
  
  classFinder(className, document);
  console.log('output :', output);
  console.log('expected :', document.getElementsByClassName(className));
  return output;
  
};
