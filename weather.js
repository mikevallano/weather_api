class Weather {
  constructor(obj) {
    this.city = obj.city,
    this.zip = obj.zip,
    this.app_id = config.app_id,
    this.base_url = 'https://api.openweathermap.org/data/2.5/weather?units=imperial'
    this.credentials = `APPID=${this.app_id}`
    this.icon_base_url = 'http://openweathermap.org/img/w/'
  }

  async getWeatherData(obj) {
    let cityToSearch = this.city || obj.city
    let zipToSearch = this.zip || obj.zip
    let searchVal;
    if (zipToSearch) {
      searchVal = `zip=${zipToSearch}`
    } else {
      searchVal = `q=${cityToSearch}`
    }
    console.log('search: ', searchVal)
    let searchUrl = `${this.base_url}&${searchVal}&${this.credentials}`
    console.log({searchUrl})
    const weatherResponse = await fetch(searchUrl)
    const weatherData = await weatherResponse.json()

    return {
      weatherData
    }
  }
}
