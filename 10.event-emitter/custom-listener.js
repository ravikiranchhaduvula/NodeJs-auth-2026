const { EventEmitter } = require('stream')

class CustomEmitter extends EventEmitter {
    constructor() {
        super()
        this.greeting = 'Hello'
    }

    greet(name) {
        this.emit('greeting',`${this.greeting},${name}`)
    }
}

//Object Creation
const customEmitter = new CustomEmitter()
//Here it is listening to the event
customEmitter.on('greeting',(input) => {
  console.log('Greeting Event', input)
})

//Invoking method which inturn emit an event
customEmitter.greet('Ravi')