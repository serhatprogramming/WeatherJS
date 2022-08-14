class Weather {
  constructor(city, state) {
    this.apiKey = "uAa1SObYl1eAkI1cRD3ljQ==6hZ4mmTwD42MsQtX";
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const url = `https://api.api-ninjas.com/v1/weather?city=${this.city}&state=${this.state}`;
    const response = await fetch(url, {
      method: "GET",
      headers: { "X-Api-Key": this.apiKey },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const weatherData = await response.json();
    return await weatherData;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
