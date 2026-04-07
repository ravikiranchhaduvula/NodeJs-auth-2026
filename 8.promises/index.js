function delayFn(time) {
 return new Promise((resolve) => {
    setTimeout(resolve, time)
    //throw "Error Inside Promise"
 })
}

console.log('Promise Lecture Starts')
delayFn(2000).then(() => console.log('After 2 seconds of Promise Resolved'))
             .catch((error)=> console.log(`Exception ${error}`))
console.log("end")

function divideFn(num1, num2) {
 return new Promise((resolve, reject) => {
    if(num2 === 0) {
      reject('We Cannot Divide By Zero')
    } else {
        resolve(num1, num2)
    }
 })
}

divideFn(10,5).then((result) => console.log(`Division result is ${result}`))
              .catch((error) => console.log(`Error Occurred ${error}`))