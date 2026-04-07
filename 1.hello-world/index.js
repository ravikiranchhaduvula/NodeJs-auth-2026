console.log("Hello Node.js")
setTimeout(() => {
 console.log('This async method is delayed by 2 seconds')
},2000)
console.log("This is the last line of sync code")