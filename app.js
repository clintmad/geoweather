


    var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather';
    if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(function (position) {
            debugger
            $.getJSON(openWeatherMap, {
                lat: position.coords.latitude,
                lon: position.coords.longitude,
                units: 'metric',
                APPID: 'bd82255fd0a21fa1238699b9eda2ee35'
            }).done(function (weather) {
                console.log(weather)
                renderWeather(weather)
            })
        })
    }



function renderWeather(position) {
    debugger
    var template = $('#cityTemplate').html();
    template = template.replace('{{ city }}', position.name);
    template = template.replace('{{ temp }}', position.main.temp);
    template = template.replace('{{ icon }}', 'http://openweathermap.org/img/w/' + position.weather[0].icon + '.png');
    template = template.replace('{{ conditions }}', position.weather[0].description);
    
    $('#myCity').append($(template));
}
