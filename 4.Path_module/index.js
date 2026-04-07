const path = require('path')
//Important
console.log('Directory Name', path.dirname(__filename))
console.log('File Name', path.basename(__filename))
console.log('Directory Name', path.extname(__filename))
//Important
const joinPath = path.join('/user','documents','node','projects')
console.log(joinPath)
const resolvePath = path.resolve('user','documents','node','projects')
console.log('Resolve Path',resolvePath)
const normalizePath = path.normalize('/user/.documents/../node/projects')
console.log('Normalize Path',normalizePath)