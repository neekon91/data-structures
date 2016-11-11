var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
  return true;
};

treeMethods.contains = function(target) {
  return (this.value === target) ? true :
    this.children.some(child => child.contains(target));
};

treeMethods.removeFromParent = function(){

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
