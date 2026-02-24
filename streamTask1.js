const fs = require('fs')

const readStream = fs.createReadStream('largeFile.txt', 'utf-8')

readStream.on('data', (chunk) => {
  console.log('Data chunk received:')
  console.log(chunk)
})

readStream.on('end', () => {
  console.log('Finished reading the file.')
})

readStream.on('error', (err) => {
  console.error('An error occurred:', err.message)
})
