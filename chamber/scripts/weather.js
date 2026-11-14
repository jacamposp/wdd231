const weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=9.998&lon=-84.117&units=metric&appid=90cdd8f0d86f9b395421d14164dfc114"
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=9.998&lon=-84.117&units=metric&appid=90cdd8f0d86f9b395421d14164dfc114`;

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDesc = document.querySelector('#weather-desc');
const forecast = document.querySelector('#forecast');

async function getWeather() {
    try {
        const response = await fetch(weatherURL)
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        displayCurrentWeather(data);

    } catch (error) {
        console.error(error)
    }
}

async function getForecast() {
    try {
        const response = await fetch(forecastURL);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        displayForecast(data);

    } catch (error) {
        console.log(error);
    }
}

function displayCurrentWeather(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    weatherDesc.textContent = data.weather[0].description;
}

function displayForecast(data) {
    // Each item is 3 hours apart, so 8 items = 1 day
    const days = [data.list[8], data.list[16], data.list[24]];

    days.forEach((day) => {
        const date = new Date(day.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });

        const li = document.createElement('li');
        li.innerHTML = `<strong>${dayName}:</strong> ${Math.round(day.main.temp)}&deg;C`;
        forecast.appendChild(li);
    });
}

getWeather()
getForecast()