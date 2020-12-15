// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var helper = function (currentElement, className) {
    var elementWithClassName = [];
    if (currentElement.classList.contains(className)) {
      elementWithClassName.push(currentElement);
    }
    var children = currentElement.children;
    if (children.length === 0) {
      return elementWithClassName;
    }
    for (var i = 0; i < children.length; i++) {
      elementWithClassName = elementWithClassName.concat(helper(children[i], className));
    }
    return elementWithClassName;
  };
  return helper(document.body, className);
};