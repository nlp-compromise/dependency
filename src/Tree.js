//maybe some wrapper-class for a tree result?
class Tree {
  constructor(root) {
    this.root = root
  }
  walk(fn) {
    const eachNode = function(node) {
      fn(node) //actually process the node
      if (node.child) {
        eachNode(node.child) //recurse down
      }
      if (node.next) {
        eachNode(node.next) //recurse ->
      }
    }
    //start it
    eachNode(this.root)
  }
  //pretty-print, somehow
  display() {
    let i = 0
    this.walk(node => {
      console.log('----')
      console.log(`   [node:${i}] -  ${node.phrase.text()}'`)
      i += 1
    })
  }
}
module.exports = Tree
