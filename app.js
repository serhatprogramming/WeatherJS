const weatherLocation = new Storage();
weatherLocation.getLocationData();
const weatherObj = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new UI();

document.addEventListener("DOMContentLoaded", getWeather);
document.querySelector("#w-change").addEventListener("click", changeLocation);

function changeLocation() {
  const city = document.querySelector("#city");
  const state = document.querySelector("#state");
  weatherObj.changeLocation(
    city.value,
    state.options[state.selectedIndex].text
  );
  weatherLocation.setLocationData(
    city.value,
    state.options[state.selectedIndex].text
  );
  getWeather();
  $("#locationModal").modal("hide");
}

function getWeather() {
  weatherObj
    .getWeather()
    .then((data) => {
      ui.paint(weatherObj, data);
    })
    .catch((err) => console.log(err));
}
