// Задание 3

// Чтение большого файла с использованием потоков

// 1.	Создайте новый файл для скрипта, например, `streamTask1.js`.

// 2.	Импортируйте модуль `fs`.

// 3.	Создайте или найдите большой текстовый файл, например, `largeFile.txt`, и поместите его в ту же директорию, что и скрипт.

// 4.	Используйте метод `fs.createReadStream` для создания потока чтения из файла `largeFile.txt`.

// 5.	Подпишитесь на события потока:

// `data`: чтобы обрабатывать каждый фрагмент данных, прочитанный из файла.
// `end`: чтобы определить, когда чтение файла завершено.
// `error`: чтобы обрабатывать возможные ошибки.

// 6.	Выводите каждый фрагмент данных на консоль.

// 7.	После завершения чтения файла выведите сообщение о завершении процесса.
// 8.	Запустите скрипт командой `node streamTask1.js` и убедитесь, что данные из файла выводятся на консоль.

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
