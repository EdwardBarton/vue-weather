import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weather: {}
  },
  mutations: {
    GET_WEATHER(state, weatherData) {
      state.weather.currently = weatherData.currently;
      state.weather.daily = weatherData.daily;
    }
  },
  actions: {
    getWeather({ commit }, { lat, long }) {
      // Fetch weather data from Dark Sky API
      fetch(
        `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${
          process.env.VUE_APP_DARK_SKY_KEY
        }/${lat},${long}`
      ).then(async resp => {
        // Update app state w/ weather response data
        commit("GET_WEATHER", await resp.json());
      });
    }
  }
});
