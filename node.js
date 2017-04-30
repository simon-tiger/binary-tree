function Node(val, x, y) {
  this.value = val;
  this.left = null;
  this.right = null;
  this.pos = createVector(x, y);
}

Node.prototype.search = function(val) {
  if (this.value == val) {
    return "Found " + this.value;
  } else if (val < this.value && this.left != null) {
    return this.left.search(val);
  } else if (val > this.value && this.right != null) {
    return this.right.search(val);
  }
  return "Not Found";
}

Node.prototype.visit = function(parent) {
  if (this.left != null) {
    this.left.visit(this);
  }
  createP(this.value);
  // fill(0);
  // textAlign(CENTER);
  // noStroke();
  // text(this.value, this.pos.x, this.pos.y);
  stroke(0);
  // noFill();
  // ellipse(this.pos.x, this.pos.y, 20, 20);
  line(parent.pos.x, parent.pos.y, this.pos.x, this.pos.y);
  if (this.right != null) {
    this.right.visit(this);
  }
}

Node.prototype.addNode = function(val) {
  var n = new Node(val);
  var r = random(-5, 5);
  if (val < this.value) {
    if (this.left == null) {
      this.left = n;
      this.left.pos.x = this.pos.x - 5 + r;
      this.left.pos.y = this.pos.y - 5 + r;
    } else {
      this.left.addNode(val);
    }
  } else if (val > this.value) {
    if (this.right == null) {
      this.right = n;
      this.right.pos.x = this.pos.x + 5 + r;
      this.right.pos.y = this.pos.y - 5 + r;
    } else {
      this.right.addNode(val);
    }
  }
}
