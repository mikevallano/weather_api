class Ui {
  constructor() {
    this.icon_base_url = 'http://openweathermap.org/img/w'
  }

  paint(data) {
    console.log('data in ul.js: ', data)
    locationNameDisplay.innerText = data.name
    temperatureDisplay.innerText = `Current Temp: ${Math.round(data.main.temp)}`
    highTempDisplay.innerText = `High Temp: ${Math.round(data.main.temp_max)}`
    lowTempDisplay.innerText = `Low Temp: ${Math.round(data.main.temp_min)}`
    humidityDisplay.innerText = `Humidity: ${data.main.humidity}`
    iconDisplay.setAttribute('src', `${this.icon_base_url}/${data.weather[0].icon}.png`)
  }
}
