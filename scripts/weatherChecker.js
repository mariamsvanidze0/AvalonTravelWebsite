function weatherApp() {
    let cityName = document.getElementById("inputWeather").value;
    let result = document.getElementById("result");
    let longLat = document.getElementById("longLat");

    if (!cityName) {
        result.textContent = "Please enter a city name.";
        longLat.textContent = ""; 
        return;
    }

    fetch(`https://geocode.maps.co/search?q=${cityName}&api_key=661428db18e9f245220327tcqc5b864`, {
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {
        if (data.length === 0) {
            result.textContent = "Failed to fetch city data. Please try again with a valid city name.";
            longLat.textContent = "";
            return;
        }
        let latitude = data[0].lat;
        let longitude = data[0].lon; 

        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`, {
            method: "GET"
        })
        .then(response => response.json())
        .then(weatherInfo => {
            result.innerText = `In ${cityName} temperature is ${weatherInfo.current_weather.temperature}°C`;
            longLat.innerText = `Latitude: ${latitude}, Longitude: ${longitude}`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            result.textContent = "Failed to fetch weather data. Please try again later.";
            longLat.textContent = ""; 
        });
    })
    .catch(error => {
        console.error('Error fetching city data:', error);
        result.textContent = "Failed to fetch city data. Please try again later.";
        longLat.textContent = ""; 
    });
}


document.getElementById("searchButton").addEventListener("click", weatherApp);
document.getElementById("inputWeatherForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    weatherApp();
});
