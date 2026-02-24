const fs = require('fs')

const readStream = fs.createReadStream('sourceFile.jpg')

const writeStream = fs.createWriteStream('destinationFile.jpg')

readStream.pipe(writeStream)

writeStream.on('finish', () => {
  console.log('Finished copying the file.')
})

writeStream.on('error', (err) => {
  console.error('An error occurred:', err.message)
})
