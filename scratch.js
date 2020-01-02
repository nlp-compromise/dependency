const nlp = require('compromise')
//apply our plugin
nlp.extend(require('./src'))

//test it
let doc = nlp('the waiter, who was hungry, eyed the hamburger.')
let result = doc.tree()
//print them out?
result.map(tree => {
  tree.display()
})
