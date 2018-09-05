class Storage {
  constructor() {
    this.city
    this.zip
    this.defaultCity = 'Austin'
  }

  setLocation(obj) {
    localStorage.setItem('locationData', JSON.stringify(obj))
  }

  getLocation() {
    let storedLocation = JSON.parse(localStorage.getItem('locationData'))

    if (storedLocation == null) {
      this.city = this.defaultCity
    } else if (storedLocation.zip) {
      this.zip = storedLocation.zip
    } else {
      this.city = storedLocation.city
    }

    return {
      city: this.city,
      zip: this.zip
    }
  }
}
