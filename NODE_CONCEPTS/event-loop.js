const fs = require('fs')
const crypto = require('crypto')

console.log('1.Script started')
setTimeout(() => {
 console.log('2.Settimeout 0 second callback macrotask')
},0)
setTimeout(() => {
 console.log('3.Settimeout 0 second callback macrotask')
},0)
setImmediate(() => {
 console.log('4.Settimeout 0 second callback check')   
})
Promise.resolve().then(() => {
    console.log('5.Promise resolved microtask')   
})
process.nextTick(() => {
    console.log('6.Process.nextTick callback microtask')
})
fs.readFile(__filename, ()  => {
    console.log('7.File read operations I/O callback')
})
crypto.pbkdf2('secret','salt',10000,64,'sha512',(err,key)=> {
    if(err) throw err
    console.log('8.pbkdf2 operation completed CPU intensive task')
})
console.log('9.Script ends')