import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    fullPage: true,
    weather: {}
  },

  mutations: {
    GET_WEATHER(state, weatherData) {
      Vue.set(state.weather, "currently", weatherData.currently);
      Vue.set(state.weather, "daily", weatherData.daily);
    }
  },

  actions: {
    async getLocation({ dispatch }, locationObj) {
      // Start loading overlay
      this.state.isLoading = true;

      // If the user clicked the 'Get My Location' button
      if (locationObj.currentLocation) {
        // Get location lat/long via browser
        navigator.geolocation.getCurrentPosition(position => {
          const location = {
            lat: position.coords.latitude,
            long: position.coords.longitude
          };

          // Fetch Dark Sky weather for state.location
          dispatch("getWeather", location);
        });
      }
      // Otherwise the user submitted an address via the input field
      else {
        // TODO: Edge cases for user input. ";" will result in an error

        // Convert the address to a lat/long using Google's Geocoding API
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${
            locationObj.address
          }&key=${process.env.VUE_APP_GOOGLE_KEY}`
        );
        const geoJSON = await response.json();

        // Setup location object from Google's response
        const location = {
          lat: geoJSON.results[0].geometry.location.lat,
          long: geoJSON.results[0].geometry.location.lng
        };

        // Fetch Dark Sky weather for state.location
        dispatch("getWeather", location);
      }
    },

    async getWeather({ commit }, { lat, long }) {
      // Fetch weather data from Dark Sky API
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${
          process.env.VUE_APP_DARK_SKY_KEY
        }/${lat},${long}`
      );
      const weatherJSON = await response.json();

      // Update app state w/ weather response data
      commit("GET_WEATHER", weatherJSON);

      // Stop loading overlay
      this.state.isLoading = false;
    }
  }
});
