Node = require('./node');

function Stack() {
  this.top = null;
}

Stack.prototype.pop = function () {
  var data = null;
  if (this.top) {
    data = this.top.data;
    this.top = this.top.next;
  }
  return data;
};

Stack.prototype.push = function (data) {
  var node = new Node(data);
  node.next = this.top;
  this.top = node;
};

Stack.prototype.peek = function(){
  if(this.top){
    return this.top.data;
  } else{
    return null;
  }
};

module.exports = Stack;
