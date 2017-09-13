var openWeatherMap = "https://api.openweathermap.org/data/2.5/weather";
if (window.navigator && window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(function (position) {
        $.getJSON(openWeatherMap, {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            units: "metric",
            APPID: "bd82255fd0a21fa1238699b9eda2ee35"
        }).done(function (weather) {
            console.log(weather);
            renderWeather(weather);
            changeBackground(weather);
        });
    });
}

function celsiusToFahrenheit(position) {
    var tempC = position.main.temp;
    var tempF = tempC * (9 / 5) + 32;
    return Math.floor(tempF);
}

function renderWeather(position) {
    var template = $("#cityTemplate").html();
    var tempF = celsiusToFahrenheit(position);
    var tempC = Math.floor(position.main.temp);

    template = template.replace("{{ city }}", position.name);
    template = template.replace("{{ tempF }}", tempF);
    template = template.replace("{{ tempC }}", tempC);
    template = template.replace("{{ icon }}", "https://openweathermap.org/img/w/" + position.weather[0].icon + ".png");
    template = template.replace("{{ conditions }}", position.weather[0].description);

    $("#myCity").append($(template));

    $('#temp-c').hide();
    
    $('#myCity').on('click', function () {
        $('#temp-c').toggle();
        $('#temp-f').toggle();
    })
}

function changeBackground(weather) {
    for (var i = 0; i < weather.weather.length; i++) {
        if (weather.weather[0].main == "Clear") {
            $(".background").css("background-image", "url(img/clear-skies.jpg)");
        } else if (weather.weather[0].main == "Clouds") {
            $(".background").css("background-image", "url(img/cloudy.jpg)");
        } else if (weather.weather[0].main == "Thunderstorm") {
            $(".background").css("background-image", "url(img/thunderstorm.jpg)");
        } else if (weather.weather[0].main == "Drizzle") {
            $(".background").css("background-image", "url(img/drizzle.jpg)");
        } else if (weather.weather[0].main == "Rain") {
            $(".background").css("background-image", "url(img/rain.jpg)");
        } else if (weather.weather[0].main == "Snow") {
            $(".background").css("background-image", "url(img/snow.jpg)");
        } else if (weather.weather[0].main == "Atmosphere") {
            $(".background").css("background-image", "url(img/atmosphere.jpg)");
        } else if (weather.weather[0].main == "Extreme") {
            $(".background").css("background-image", "url(img/extreme.jpg)");
        } else if (weather.weather[0].main == "Additional") {
            $(".background").css("background-image", "url(img/windy.jpg)");
        }
    }
}