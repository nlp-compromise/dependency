const Node = require('./Node')
const Tree = require('./Tree')

/** turn a sentence into a tree-structure? */
const toTree = function(s) {
  let clauses = s.clauses() //split into parts
  //turn each phrase into a 'Node'
  let list = []
  //add the rest as siblings
  clauses.list.forEach((phrase, i) => {
    let node = new Node(phrase)
    list.push(node)
    //attach to last sibling
    if (list[i - 1]) {
      list[i - 1].next = node
    }
  })
  //create a tree result from the root node?
  return new Tree(list[0])
}

//add the method 'tree' to the Doc class
const addMethod = function(Doc) {
  /** return a dependency-tree for each sentence */
  Doc.prototype.tree = function() {
    let results = []
    //do each sentence
    this.forEach(doc => {
      results.push(toTree(doc))
    })
    return results
  }
}
module.exports = addMethod
