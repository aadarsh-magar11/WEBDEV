//weather app

const weatherform = document.querySelector(".weatherform")
const cityinput = document.querySelector(".cityinput")
const card = document.querySelector(".card")
const apikey = "72af282cb849ba92e2d13ff59e814064";

weatherform.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityinput.value;
    if (city) {
        try {
            const weatherdata = await getWeatherData(city);
            displayWeatherInfo(weatherdata);
        }
        catch (error) {
            console.error(error);
        }
    }
    else {
        displayError("Please enter a city");
    }

});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("could not fetch weather data");
    }
    return await response.json();
}

function displayWeatherInfo(weatherdata) {
    const { name: city,
        main: { temp, humidity },
        weather: [{ description, id }] } = weatherdata;

    card.textContent = "";
    card.style.display = "flex";

    const displaycity = document.createElement("h1")
    const displaytemp = document.createElement("p")
    const displayhumidity = document.createElement("p")
    const displaydes = document.createElement("p")
    const weatheremoji = document.createElement("p")

    displaycity.textContent = city;
    displaytemp.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    displayhumidity.textContent = `Humidity: ${humidity}`
    displaydes.textContent = description
    weatheremoji.textContent = getWeatherEmoji(id)

    displaycity.classList.add("displaycity")
    displaytemp.classList.add("displaytemp")
    displayhumidity.classList.add("displayhumidity")
    displaydes.classList.add("displaydes")
    weatheremoji.classList.add("weatheremoji")

    card.appendChild(displaycity)
    card.appendChild(displaytemp)
    card.appendChild(displayhumidity)
    card.appendChild(displaydes)
    card.appendChild(weatheremoji)
}

function getWeatherEmoji(weatherid) {
    switch (true) {
        case (weatherid >= 200 && weatherid < 300):
            return "⛈️";
        case (weatherid >= 300 && weatherid < 400):
            return "🌧️";
        case (weatherid >= 500 && weatherid < 600):
            return "🌧️";
        case (weatherid >= 600 && weatherid < 700):
            return "❄️";
        case (weatherid >= 700 && weatherid < 800):
            return "🌫️";
        case (weatherid === 800):
            return "☀️";
        case (weatherid >= 801 && weatherid < 810):
            return "☁️";
        default:
            return "?";
    }
}

function displayError(message) {

    const disErr = document.createElement("p");
    disErr.textContent = message;
    disErr.classList.add("displayerror");

    card.textContent = "";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.appendChild(disErr);
}
