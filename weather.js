class Weather {
  constructor(city, zip) {
    this.city = city,
    this.zip = zip,
    this.app_id = config.app_id,
    this.base_url = 'api.openweathermap.org/data/2.5/weather?units=imperial'
    this.credentials = `APPID=${this.app_id}`
    this.icon_base_url = 'http://openweathermap.org/img/w/'
  }
}
