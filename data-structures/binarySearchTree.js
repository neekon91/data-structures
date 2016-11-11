var BinarySearchTree = function(value) {
  var binaryTree = Object.create(treeMethods)
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  binaryTree.root = arguments[1] || false;
  return binaryTree;
};
treeMethods.prototype.insert = function(value){

}
treeMethods.prototype.contains = function(){}
treeMethods.prototype.depthFirstSearch = function(){}
treeMethods.prototype.breadthFirstLog = function(){}
treeMethods.prototype.balanceFactor = function(){}
treeMethods.prototype.rotateRight = function(){}
treeMethods.prototype.rotateLeft = function(){}
treeMethods.prototype.rebalance = function(){}
/*
 * Complexity: What is the time complexity of the above functions?
 */
