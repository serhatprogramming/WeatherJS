const weatherObj = new Weather("wayne", "new jersey");
const ui = new UI();

document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weatherObj
    .getWeather()
    .then((data) => {
      ui.paint(weatherObj, data);
    })
    .catch((err) => console.log(err));
}
