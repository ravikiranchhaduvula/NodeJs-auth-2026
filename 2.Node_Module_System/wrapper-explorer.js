console.log('Node Module wrapper Demo')
console.log('__filename inside wrapper-explorer',__filename)
console.log('__dirname inside wrapper-explorer',__dirname)

module.exports.greet = function(name) {
    console.log(`Hello ${name}`)
}