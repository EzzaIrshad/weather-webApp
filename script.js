const apiKey = config.API_KEY;
const apiUrl = config.API_URL;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


const checkWeather = async (city) => {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        let data = await response.json();
        console.log(data)
    
    document.querySelector(".city").innerText = data.name ;
    document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + " km/h";
    document.querySelector(".feels").innerText = Math.round(data.main.feels_like) + "°C";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    } else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }  else if(data.weather[0].main == "Thunderstorm" || data.weather[0].main == "Haze"){
        weatherIcon.src = "images/mist.png";
    } else if(data.weather[0].main == "Smoke"){
        weatherIcon.src = "images/humidity.png";
        
    } else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    } else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    } else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    
    }
}


searchBtn.addEventListener("click",()=> {
    checkWeather(searchBox.value);
    
})

