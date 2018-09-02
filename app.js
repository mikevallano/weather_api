let weather = new Weather({})
const locationForm = document.querySelector('form#location')
const cityInput = document.getElementById('city')
const zipInput = document.getElementById('zip')

locationForm.addEventListener('submit', (e) => {
  e.preventDefault()
  let cityVal = cityInput.value
  let zipVal = zipInput.value
  weather.getWeatherData({city: cityVal, zip: zipVal})
    .then(data => {
      console.log({data})
    })
})
