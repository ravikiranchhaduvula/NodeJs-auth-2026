const { error } = require('console');
const fs = require('fs');

fs.readFile('input.txt', "utf-8", (err, data) =>{
  if(err) {
    console.error(`Error reading file ${err}`)
    return
 }
 const modifyData = data.toUpperCase()
 fs.writeFile('output.txt', modifyData, (err) => {
    if(err) {
    console.error(`Error writing file ${err}`)
    return
 }
 console.log('Data written to the new file')
fs.readFile('output.txt', 'utf-8', (err, data) => {
   if(err) {
    console.error(`Error reading file ${err}`)
    return
   }
   console.log(data)
})
 })
})