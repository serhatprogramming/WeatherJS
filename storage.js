class Storage {
  constructor() {
    this.state;
    this.city;
    this.defaultCity = "Manhattan";
    this.defaultState = "New York";
  }

  getLocationData() {
    if (localStorage.getItem("city") === null) {
      this.city = this.defaultCity;
      this.state = this.defaultState;
      this.setLocationData(this.city, this.state);
    } else {
      this.city = localStorage.getItem("city");
      this.state = localStorage.getItem("state");
    }
  }

  setLocationData(city, state) {
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);
  }
}
