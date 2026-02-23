const axios = require('axios')
const fs = require('fs')

async function getPosts() {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    )
    const posts = response.data
    fs.writeFile('posts.txt', JSON.stringify(posts, null, 2), (err) => {
      if (err) {
        console.error('Error writing to file:', err)
        return
      }
      console.log('Posts have been written to posts.txt')
      fs.readFile('posts.txt', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err)
          return
        }
        console.log('File contents:', data)
      })
    })
  } catch (error) {
    console.error('Error fetching posts:', error.message)
  }
}

getPosts()
