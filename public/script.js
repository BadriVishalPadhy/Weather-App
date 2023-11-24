async function getWeather() {
  const city = document.getElementById('cityInput').value;
  try {
    const response = await fetch(`/weather?city=${city}`);
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

function displayWeather(weatherData) {
  const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = `
    <h2>${weatherData.name}, ${weatherData.sys.country}</h2>
    <p>Temperature: ${weatherData.main.temp}°C</p>
    <p>Weather: ${weatherData.weather[0].main}</p>
    <p>Description: ${weatherData.weather[0].description}</p>
  `;
}