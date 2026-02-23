const axios = require('axios')
require('dotenv').config()

const city = process.env.CITY

async function getWeather() {
  try {
    const response = await axios.get(`https://wttr.in/${city}?format=%t`)
    console.log(`The temperature in ${city} is: ${response.data}`)
  } catch (error) {
    console.error('Error fetching weather data:', error.message)
  }
}

getWeather()
