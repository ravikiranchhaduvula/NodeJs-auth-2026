function delayFn(time) {
    return new Promise((resolve) => {
       setTimeout(resolve, time)
    })
}

async function delayedGreet(name) {
    await delayFn(200)
    console.log(name)
}

delayedGreet('Ravi Chhaduvula')

async function division(num1, num2) {
    try {
      if(num2 === 0) {
        throw new Error('Cannot Divide By Zero')
      }
      return num1 / num2
    } catch(error) {
      console.log(`Error ${error}`)
      return null
    }
}

async function mainFn() {
    console.log(await division(10,5))
    console.log(await division(10,0))
}

mainFn()