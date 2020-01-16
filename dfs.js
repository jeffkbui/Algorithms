class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) { 
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Write your code here.
    // make sure to write pseudo code before
    // push child to end
  }
}

// Do not edit the line below.
exports.Node = Node;

