const fs = require('fs');

function person(name, callback) {
    console.log(`My Name is ${name}`)
    //Callback execution starts only after the above logic completes
    callback()
}

function address() {
    console.log('Australia')
}

//Invoking function passing address as callback
person('Ravi Kiran', address)

//After reading file only the callback logic executes
fs.readFile('input.txt',"utf-8", (data, err)=> {
 if(err) {
    console.error(`Error reading file ${err}`)
    return
 }
  console.log(data)
})