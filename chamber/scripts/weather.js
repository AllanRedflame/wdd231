const url = "https://api.openweathermap.org/data/2.5/forecast?lat=40.7608&lon=-111.8910&units=imperial&appid=f39973082ab5286d5c823eb243fa4a43";

async function apiFetch() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw Error(await response.text());
        }

        const data = await response.json();
        displayWeather(data);

    } catch (error) {
        console.log(error);
    }
}

function displayWeather(data) {
    const weatherDiv = document.querySelector("#weather-div");

    const dailyMap = {};

    data.list.forEach(entry => {
        const date = new Date(entry.dt * 1000);
        const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
        const hour = date.getHours();

        if (hour === 12 && !dailyMap[dayName]) {
            dailyMap[dayName] = entry;
        }
    });

    const days = Object.values(dailyMap);


    const today = data.list[0];
    const todayWeather = today.weather[0].description;
    const todayTemp = today.main.temp;

    const todayCard = document.createElement("div");
    const todayTop = document.createElement("div");
    const todayBottom = document.createElement("div");

    const todayHeader = document.createElement("h3");
    const todayWeatherP = document.createElement("p");
    const todayTempP = document.createElement("p");

    todayHeader.textContent = "Today";
    todayWeatherP.textContent = `Weather: ${todayWeather}`;
    todayTempP.textContent = `Temperature: ${todayTemp}°F`;

    todayCard.classList.add("card");
    todayTop.classList.add("topDiv");
    todayBottom.classList.add("bottomDiv");

    todayTop.appendChild(todayHeader);
    todayBottom.appendChild(todayWeatherP);
    todayBottom.appendChild(todayTempP);

    todayCard.appendChild(todayTop);
    todayCard.appendChild(todayBottom);

    weatherDiv.appendChild(todayCard);

    const nextThree = days.slice(1, 4);

    nextThree.forEach(entry => {
        const date = new Date(entry.dt * 1000).toLocaleDateString("en-US", {
            weekday: "long"
        });

        const weather = entry.weather[0].description;
        const temp = entry.main.temp;

        const card = document.createElement("div");
        const topDiv = document.createElement("div");
        const bottomDiv = document.createElement("div");

        const header = document.createElement("h3");
        const weatherP = document.createElement("p");
        const tempP = document.createElement("p");

        header.textContent = date;
        weatherP.textContent = `Weather: ${weather}`;
        tempP.textContent = `Temperature: ${temp}°F`;

        card.classList.add("card");
        topDiv.classList.add("topDiv");
        bottomDiv.classList.add("bottomDiv");

        topDiv.appendChild(header);
        bottomDiv.appendChild(weatherP);
        bottomDiv.appendChild(tempP);

        card.appendChild(topDiv);
        card.appendChild(bottomDiv);

        weatherDiv.appendChild(card);
    });
}

apiFetch();