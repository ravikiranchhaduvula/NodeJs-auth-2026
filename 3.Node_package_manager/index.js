const loadash = require('lodash')

const names = ['Ravi','Kiran','Ratna','Kumari']
const capitalize = loadash.map(names, loadash.capitalize)
console.log(capitalize)