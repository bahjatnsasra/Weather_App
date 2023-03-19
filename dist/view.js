class Renderer {
    renderWeather(allCities){
        const source = $('#weather-template').html();
            const template = Handlebars.compile(source);
            const newHTML = template({allCities});
            $("#weather").append(newHTML)
    }

    findCityName(){
        
        $("#weather").on("click",".DB_saveButtons",function () {
            let cityName = $(this).closest("div").next(".city_name").html()
            console.log(cityName);
            
        })

    }
}