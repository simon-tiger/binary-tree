var canvas;

var tree;

function setup() {
  canvas = createCanvas(640, 360);
  canvas.elt.style.border = '1px solid gray';
  background(255);
  tree = new Tree();
  for (var i = 0; i < floor(random(10, 500001)); i++) {
    tree.addValue(floor(random(0, 500000)));
  }
  tree.traverse();
  createElement("hr");
  var r = floor(random(0, 100));
  createP(tree.search(r));
  createP(r);
}
