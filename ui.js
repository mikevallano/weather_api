class Ui {
  constructor() {
    this.icon_base_url = 'http://openweathermap.org/img/w'
  }

  paint(data) {
    console.log('data in ul.js: ', data)
    locationNameDisplay.innerText = data.name
    temperatureDisplay.innerText = `Current Temp: ${data.main.temp}`
    humidityDisplay.innerText = `Humidity: ${data.main.humidity}`
    highTempDisplay.innerText = `High Temp: ${data.main.temp_max}`
    lowTempDisplay.innerText = `Low Temp: ${data.main.temp_min}`
    iconDisplay.setAttribute('src', `${this.icon_base_url}/${data.weather[0].icon}.png`)
  }
}
