var BinarySearchTree = function(value) {
  var binaryTree = Object.create(bianryMethod);
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  return binaryTree;
};

var bianryMethod = {
  insert: function(value){
    if(this.value > value){
      (!this.left) ? this.left = BinarySearchTree(value) : this.left.insert(value);
    } else if(this.value < value){
      (!this.right) ? this.right = BinarySearchTree(value) : this.right.insert(value);
    }
  },
  contains: function(target){
    if(this.value === target){
      return true;
    } else if(this.value > target){
      return !!(this.left && this.left.contains(target))
    } else if(this.value < target){
      return !!(this.right && this.right.contains(target))
    }
  },
  depthFirstLog: function(cb){
    cb(this.value);
    if(this.right){
      this.right.depthFirstLog(cb)
    } else if (this.left){
      this.left.depthFirstLog(cb)
    }
  }
};
// treeMethods.prototype.balanceFactor = function(){}
// treeMethods.prototype.rotateRight = function(){}
// treeMethods.prototype.rotateLeft = function(){}
// treeMethods.prototype.rebalance = function(){}
/*
 * Complexity: What is the time complexity of the above functions?
 */
