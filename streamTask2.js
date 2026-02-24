const fs = require('fs')

const writeStream = fs.createWriteStream('output.txt', 'utf-8')

for (let i = 1; i < 1000; i++) {
  writeStream.write(`Line ${i}\n`)
}

writeStream.end()

writeStream.on('finish', () => {
  console.log('Finished writing to the file.')
})

writeStream.on('error', (err) => {
  console.error('An error occurred:', err.message)
})
