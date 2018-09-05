class Ui {
  constructor() {
    this.icon_base_url = 'http://openweathermap.org/img/w'
  }

  paint(data) {
    locationNameDisplay.innerText = data.name
    temperatureDisplay.innerText = `Current Temp: ${Math.round(data.main.temp)} F`
    highTempDisplay.innerText = `High Temp: ${Math.round(data.main.temp_max)} F`
    lowTempDisplay.innerText = `Low Temp: ${Math.round(data.main.temp_min)} F`
    humidityDisplay.innerText = `Humidity: ${data.main.humidity}%`
    iconDisplay.setAttribute('src', `${this.icon_base_url}/${data.weather[0].icon}.png`)
  }
}
