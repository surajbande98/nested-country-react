import * as countryData from "countrycitystatejson";

export class DataService {
  static getCountries() {
    return countryData.getCountries();
  }

  static getStatesByCountry(countryShotName) {
    return countryData.getStatesByShort(countryShotName);
  }

  static getCitiesByState(country, state) {
    return countryData.getCities(country, state);
  }
}
