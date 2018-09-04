let weather = new Weather({})
let ui = new Ui
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

let zips = [33124, 33125, 33126, 33127, 33128, 33129, 33130, 33131, 33132, 33133]

let randZip = zips[Math.floor(Math.random() * zips.length)];

document.addEventListener('DOMContentLoaded', getWeatherData({zip: randZip}))

locationForm.addEventListener('submit', (e) => {
  e.preventDefault()
  $(locationModal).modal('hide')
  let cityVal = cityInput.value
  let zipVal = zipInput.value
  getWeatherData({city: cityVal, zip: zipVal})
})


function getWeatherData(obj) {
  weather.getWeatherData({city: obj.city, zip: obj.zip})
    // .then(data => {
    //   console.log(data.weatherData)
    // })
    .then(data => ui.paint(data.weatherData))
    .catch(err => {console.log(err)})
};
