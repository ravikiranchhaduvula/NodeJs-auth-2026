const first_module = require('./first-module')

console.log(first_module.add(10,20))

try {
  console.log('Trying to Divide By Zero')
   let result = first_module.divide(0,0)
   console.log(result)
} catch(error) {
   console.log('Caught and error ', error.message)
}