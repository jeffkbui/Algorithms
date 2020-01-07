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
  }
}

// Do not edit the line below.
exports.Node = Node;

// new notes are here asdfsdafsdafdsfasdfafasdfasdfasdfsda