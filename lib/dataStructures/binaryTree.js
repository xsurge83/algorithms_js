// Generated by CoffeeScript 1.6.2
(function() {
  var BinaryTree, Tree;

  Tree = (function() {
    function Tree(item, parent, left, right) {
      this.item = item;
      this.parent = parent;
      this.left = left;
      this.right = right;
    }

    return Tree;

  })();

  BinaryTree = (function() {
    function BinaryTree(tree) {
      this.tree = tree;
    }

    BinaryTree.prototype.tree = null;

    BinaryTree.prototype.insert = function(item, parent, currentNode) {
      var p;

      if (currentNode == null) {
        currentNode = this.tree;
      }
      if (!currentNode) {
        p = new Tree(item, parent);
        return currentNode = p;
      } else if (item < currentNode.item) {
        return this.insert(item, currentNode, currentNode.left);
      } else {
        return this.insert(item, currentNode, currentNode.right);
      }
    };

    return BinaryTree;

  })();

  module.exports = {
    Tree: Tree,
    BinaryTree: BinaryTree
  };

}).call(this);

/*
//@ sourceMappingURL=binaryTree.map
*/
