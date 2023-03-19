class Renderer {
    renderWeather(allCities){
        const source = $('#weather-template').html();
            const template = Handlebars.compile(source);
            const newHTML = template({allCities});
            $(".weather").append(newHTML)
    }
}