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
    // push child to end
  }
}

// Do not edit the line below.
exports.Node = Node;

// creating new notes here with tips on how to approach algos