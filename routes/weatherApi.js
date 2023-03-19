
const express = require('express')
const router = express.Router()
const Weather = require('../models/weather')
const weatherService = require('../service/weatherService')



router.post('/weather/city',async function (req,res) {
    let cityName = req.body.city
    let weather = await weatherService.getWeather(cityName)
    res.send(weather)
    res.end()
})  

router.post('/weather/city/save',async function (req,res) {
    let cityName = req.body.city
    let weather = new Weather(await weatherService.getWeather(cityName)) 
    weather.save()
    res.send(weather)
})

router.get('/weather/cities',function (req,res) {
    Weather.find({},{_id:0})
    .then(CitiesWeather => {
        res.send(CitiesWeather)
    })
})


router.delete('/weather/city',function (req,res) {
    let cityName = req.body.city
    Weather.findOneAndDelete({name : cityName})
    .then(City => {
        if (!City) {
            res.status(404).send(`city ${cityName} not found`)
            res.end()
        }else{
            res.send(`${cityName} is deleted`)
        }
    })
})  


module.exports = router