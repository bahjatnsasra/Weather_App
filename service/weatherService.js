const axios = require('axios');
const API_KEY = "267b9d8f8f4e44a2ca40c59a538ae1a5"
const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?`
const LOCATION_API = `http://api.openweathermap.org/geo/1.0/direct?q=`
const WEATHER_ICON_API = 'https://openweathermap.org/img/wn/'
const COUNTRY_CODE = "+972"



async function getLocation(cityName) {
    let locationObj = await axios.get(`${LOCATION_API}${cityName},${COUNTRY_CODE}&appid=${API_KEY}`)
    let locationData = locationObj.data[0]
    let location = {
        lat : locationData.lat,
        lon : locationData.lon
    }
    return location 
}

async function getWeather(cityName) {
    let location = await getLocation(cityName)
    let weatherObj = await axios.get(`${WEATHER_API}units=metric&lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}`)
    let weatherData = weatherObj.data
    let weather = {
        name : cityName,
        temperature : weatherData.main.temp,
        condition : weatherData.weather[0].description,
        conditionPic : `${WEATHER_ICON_API}${weatherData.weather[0].icon}@2x.png`
    }
    return weather
}


module.exports = {
    getWeather
}