class UI {
  constructor() {
    this.location = document.querySelector("#w-location");
    this.desc = document.querySelector("#w-desc");
    this.string = document.querySelector("#w-string");
    this.details = document.querySelector("#w-details");
    this.icon = document.querySelector("#w-icon");
    this.humidity = document.querySelector("#w-humidity");
    this.feelslike = document.querySelector("#w-feels-like");
    this.sunrise = document.querySelector("#w-sunrise");
    this.wind = document.querySelector("#w-wind");
    this.location = document.querySelector("#w-location");
  }

  paint(weatherObj, weather) {
    this.location.textContent = `${
      weatherObj.city[0].toUpperCase() + weatherObj.city.substring(1)
    }, ${weatherObj.state[0].toUpperCase() + weatherObj.state.substring(1)}`;
    this.desc.textContent = "Lovely Weather";
    this.string.textContent = `${(9 * weather.temp) / 5} F (${
      weather.temp
    } C) `;
    this.humidity.textContent = `Humidity: ${weather.humidity}`;
    this.feelslike.textContent = `Feels like: ${weather.feels_like}`;
    this.sunrise.textContent = `Sunrise at ${new Date(
      weather.sunrise * 1000
    ).getHours()}:${new Date(weather.sunrise * 1000).getMinutes()}`;
    this.wind.textContent = `Wind: ${weather.wind_speed}`;
  }
}
