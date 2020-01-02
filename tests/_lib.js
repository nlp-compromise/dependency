const nlp = require('compromise')

if (typeof process !== undefined && typeof module !== undefined) {
  let nlp
  if (process.env.TESTENV === 'prod') {
    nlp.extend(require(`../`))
  } else {
    nlp.extend(require(`../src`))
  }

  module.exports = nlp
}
