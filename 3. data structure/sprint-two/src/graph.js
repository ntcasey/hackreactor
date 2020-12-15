

// Instantiate a new graph
var Graph = function() {
  this.g = [];
};

var GraphNode = function(value) {
  let node = {};
  node.value = value;
  node.connectedTo = [];
  return node;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  let n = GraphNode(node);
  this.g.push(n);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (let i = 0; i < this.g.length; i++) {
    if (this.g[i].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  let nodeToRemove = this.getNode(node);
  for (let i = 0; i < nodeToRemove.connectedTo.length; i++) {

    let childNode = nodeToRemove.connectedTo[i];
    let indexRemove = childNode.connectedTo.indexOf(nodeToRemove);
    childNode.connectedTo.splice(indexRemove, 1);
  }


  this.g.splice(this.g.indexOf(nodeToRemove), 1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  let fromGraphNode = this.getNode(fromNode);
  for (var i = 0; i < fromGraphNode.connectedTo.length; i++) {
    if (fromGraphNode.connectedTo[i].value === toNode) {
      return true;
    }
  }
  return false;
};

// added: helper function to find node in graph
Graph.prototype.getNode = function (node) {
  for (var i = 0; i < this.g.length; i++) {
    if (node === this.g[i].value) {
      return this.g[i];
    }
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }
  let graphFromNode = this.getNode(fromNode);
  let graphToNode = this.getNode(toNode);

  graphFromNode.connectedTo.push(graphToNode);
  graphToNode.connectedTo.push(graphFromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }
  let graphFromNode = this.getNode(fromNode);
  let graphToNode = this.getNode(toNode);

  let removeFromIndex = graphFromNode.connectedTo.indexOf(graphToNode);
  graphFromNode.connectedTo.splice(removeFromIndex, 1);

  let removeToIndex = graphToNode.connectedTo.indexOf(graphFromNode);
  graphToNode.connectedTo.splice(removeToIndex, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let i = 0; i < this.g.length; i++) {
    cb(this.g[i].value);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

let graph = new Graph();
graph.addNode(2);
graph.addNode(1);
graph.addNode(3);
graph.addEdge(3, 2);


