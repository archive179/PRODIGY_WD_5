document.getElementById('fetchWeatherBtn').addEventListener('click', fetchWeather);

async function fetchWeather() {
    const location = document.getElementById('locationInput').value;
    const apiKey = 'dc995c888e9bffddee56daeb1db89b81'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            displayWeather(data);
        } else {
            document.getElementById('weatherDisplay').innerText = `Error: ${data.message}`;
        }
    } catch (error) {
        document.getElementById('weatherDisplay').innerText = 'Error fetching weather data';
    }
}

function displayWeather(data) {
    const weatherDisplay = document.getElementById('weatherDisplay');
    const { name, main, weather } = data;
    weatherDisplay.innerHTML = `
        <h2>Weather in ${name}</h2>
        <p>${weather[0].description}</p>
        <p>Temperature: ${main.temp} °C</p>
        <p>Humidity: ${main.humidity}%</p>
        <p>Pressure: ${main.pressure} hPa</p>
    `;
}
