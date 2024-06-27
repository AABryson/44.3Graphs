class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex)
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for(let x of vertexArray){
      this.addVertex(x)
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2)
    v2.adjacent.add(v1)
    

  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    // v1.adjacent.remove(v2)
    v1.adjacent.delete(v2)
    v2.adjacent.delete(v1)
  }


  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
  
    for(let x of this.nodes){
      if(x.adjacent.has(vertex))
      x.adjacent.delete(vertex)
    }
    this.nodes.delete(vertex)
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let stack = [start]
    let seen = new Set(stack)
    while(stack.length) {
      let currentNode = stack.pop()
      console.log('currentNode', currentNode)
      for(let adjunct of currentNode.adjacent) {
        if(!seen.has(neighbor)) {
          stack.push(adjunct)
          seen.add(adjunct)
          console.log('added', seen)
        }

      }
    }
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let toVisit = [start]
    let seen = new Set(toVisit)
    while(toVisit.length) {
      let currentNode = toVisit.shift()
      for(let adjunct of currentNode.adjacent) {
        if(!seen.has(adjunct)){
          toVisit.push(adjunct)
          seen.add(adjunct)
        }
      }
    }
  }
}

module.exports = {Graph, Node}