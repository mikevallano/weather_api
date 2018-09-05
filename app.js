let weather = new Weather({})
let ui = new Ui
let storage = new Storage
const locationForm = document.querySelector('form#location')
const locationModal = document.getElementById('locationModal')
const cityInput = document.getElementById('city')
const zipInput = document.getElementById('zip')
const lowTempDisplay = document.getElementById('w-low-temp')
const highTempDisplay = document.getElementById('w-high-temp')
const feelsLikeDisplay = document.getElementById('w-feels-like')
const humidityDisplay = document.getElementById('w-humidity')
const locationNameDisplay = document.getElementById('w-location')
const descriptionDisplay = document.getElementById('w-desc')
const temperatureDisplay = document.getElementById('w-temp')
const iconDisplay = document.getElementById('w-icon')

document.addEventListener('DOMContentLoaded', getWeatherData(storage.getLocation()))

locationForm.addEventListener('submit', (e) => {
  e.preventDefault()
  $(locationModal).modal('hide')
  let cityVal = cityInput.value
  let zipVal = zipInput.value
  let locationObj = {city: cityVal, zip: zipVal}
  storage.setLocation(locationObj)
  getWeatherData(locationObj)
})


function getWeatherData(obj) {
  console.log({obj})
  weather.getWeatherData(obj)
    .then(data => ui.paint(data.weatherData))
    .catch(err => {console.log(err)})
};
