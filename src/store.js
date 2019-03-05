import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weather: {}
  },
  mutations: {
    GET_LOCATION(state, weatherData) {
      state.weather.currently = weatherData.currently;
      state.weather.daily = weatherData.daily;
    }
  },
  actions: {
    async getLocation({ commit }) {
      await navigator.geolocation.getCurrentPosition(async position => {
        // Fetch weather data from Dark Sky API
        await fetch(
          `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/ec474908d5a6b77c1d4e9d922f61dc9a/${
            position.coords.latitude
          },${position.coords.longitude}`
        ).then(async resp => {
          commit("GET_LOCATION", await resp.json());
        });
      });
    }
  }
});
