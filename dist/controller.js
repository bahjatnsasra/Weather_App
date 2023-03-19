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



$("#weather").on("click",".DB_saveButtons",function () {
    let cityName = $(this).closest("div").next(".city_name").html()
    if (cityName) {
        apiManager.saveCity(cityName)
        $("#city_input").val("")
    }
})



$("#weather").on("click",".DB_deleteButtons",function () {
    let cityName = $(this).closest("div").next(".city_name").html()
    if (cityName) {
        apiManager.deleteCity(cityName)
        $("#city_input").val("")
    }
})


