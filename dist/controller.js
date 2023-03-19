const apiManager = new ApiManager()
const renderManager = new Renderer()


function loadPage() {
    $('.weather').empty()
    renderSavedCities()
}

async function newCity() {
    let cityName = $("#city_input").val()
    if (cityName) {
        await apiManager.displayNewCity(cityName)
        renderManager.renderWeather(apiManager.citiesWeather)
        apiManager.citiesWeather.pop()
    }
}

async function renderSavedCities() {
    let allCities = await apiManager.getCities()
    console.log(allCities);
    renderManager.renderWeather(allCities)
}


function insertCityToDB(cityName) {
    if (cityName) {
        apiManager.saveCity(cityName)
        $("#city_input").val("")
    }
    
}

function removeCityFromDB(cityName) {
    console.log(cityName);
    apiManager.deleteCity(cityName)
}

