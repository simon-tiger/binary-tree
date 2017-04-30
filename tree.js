function Tree() {
  this.root = null;
}

Tree.prototype.search = function(val) {
  return this.root.search(val);
}

Tree.prototype.traverse = function() {
  this.root.visit(this.root);
}

Tree.prototype.addValue = function(val) {
  var n = new Node(val);
  if (this.root == null) {
    this.root = n;
    this.root.pos.x = width / 2;
    this.root.pos.y = height;
  } else {
    this.root.addNode(val);
  }
}
