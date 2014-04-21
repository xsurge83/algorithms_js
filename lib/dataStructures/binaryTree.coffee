class Tree
  constructor: (@item, @parent, @left, @right)->

class BinaryTree
  constructor: (@tree)->
  tree : null
  insert : (item, parent, currentNode=@tree)->
    if not currentNode
      p = new Tree(item, parent)
      currentNode = p
    else if item < currentNode.item
      @insert(item, currentNode, currentNode.left)
    else
      @insert(item, currentNode, currentNode.right)
      
module.exports =
  Tree : Tree
  BinaryTree : BinaryTree
