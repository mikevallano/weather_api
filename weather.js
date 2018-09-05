class Weather {
  constructor() {
    this.base_url = 'https://api.openweathermap.org/data/2.5/weather?units=imperial'
    this.credentials = `APPID=${config.app_id}`
  }

  async getWeatherData(obj) {
    let cityToSearch = obj.city
    let zipToSearch = obj.zip
    let searchVal;
    if (zipToSearch) {
      searchVal = `zip=${zipToSearch}`
    } else {
      searchVal = `q=${cityToSearch}`
    }
    let searchUrl = `${this.base_url}&${searchVal}&${this.credentials}`
    const weatherResponse = await fetch(searchUrl)
    const weatherData = await weatherResponse.json()

    return {
      weatherData
    }
  }
}
