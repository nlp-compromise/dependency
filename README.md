<div align="center">
  <img src="https://cloud.githubusercontent.com/assets/399657/23590290/ede73772-01aa-11e7-8915-181ef21027bc.png" />

  <div>a plugin for <a href="https://github.com/spencermountain/compromise/">compromise</a></div>
  
  <!-- npm version -->
  <a href="https://npmjs.org/package/compromise-tree">
    <img src="https://img.shields.io/npm/v/compromise-tree.svg?style=flat-square" />
  </a>
  
  <!-- file size -->
  <a href="https://unpkg.com/compromise-syllables/builds/compromise-tree.min.js">
    <img src="https://badge-size.herokuapp.com/spencermountain/compromise-dependency/master/builds/compromise-tree.min.js" />
  </a>
   <hr/>
</div>

This is a work-in-progress experiment to bring [dependency parsing](https://en.wikipedia.org/wiki/Dependency_grammar) to compromise.

<div align="center">
  <code>npm install compromise-syllables</code>
</div>

```js
const nlp = require('compromise')
nlp.extend(require('compromise-tree'))

let doc = nlp('the waiter, who was hungry, eyed the hamburger.')

console.log(doc.tree())
```

MIT
