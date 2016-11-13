var BinarySearchTree = function(value) {
  var binaryTree = Object.create(bianryMethod);
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  binaryTree.root = arguments[1] || false;
  return binaryTree;
};

var bianryMethod = {
  insert: function(value){
    if(this.value > value){
      (!this.left) ? this.left = BinarySearchTree(value) : this.left.insert(value);
    } else if(this.value < value){
      (!this.right) ? this.right = BinarySearchTree(value) : this.right.insert(value);
    }
    if (this.root){
      this.rebalance();
    }
    return true;
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
    if(this.left){
      this.left.depthFirstLog(cb)
    } else if (this.right){
      this.right.depthFirstLog(cb)
    }
  },
  breadthFirstLog: function(cb){
  },
  findHeight: function(){
    if(!this.left && !this.right){
      return -1;
    }
    var lef = 0;
    var righ = 0;
    if(this.left){
      lef = this.left.findHeight()
    }
    if(this.right){
      righ = this.right.findHeight()
    }
    return (lef > righ) ? lef + 1 : righ + 1;
  },
  balanceFactor: function(){
    if(!this.left && !this.right){
      return -1;
    }
    var lef = 0;
    var righ = 0;
    if(this.left){
      lef = this.left.findHeight()
    }
    if(this.right){
      righ = this.right.findHeight()
    }
    return (lef + 1) - (righ + 1);
  },
  rotateRight: function(){},
  rotateLeft: function(){},
  rebalance: function(){}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
