class ApiManager {
    constructor(){
        this.citiesWeather = []
    }

    async displayNewCity(cityName) {
        let response = await $.post('/weather/city',{"city" : cityName})
        this.citiesWeather.push(response)
    }

    getCities() {
        let cities = $.get('/weather/cities')
        return cities
    }

    saveCity(cityName) {
        $.post('/weather/city/save',{"city" : cityName})
    }

    deleteCity(cityName) {
        console.log(cityName);
        axios.delete('/weather/city',{ data: {"city" : cityName} })
    }
    
}











