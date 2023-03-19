const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/WeatherDB')
.then(()=> console.log('Connected to MongoDB'))
.catch((error)=> console.log('cant Connected to MongoDB',error));

const weatherSchema = new Schema({
    name : String,
    temperature : Number,
    condition : String,
    conditionPic : String
})

const Weather = mongoose.model("WeatherInfo", weatherSchema) 

module.exports = Weather
