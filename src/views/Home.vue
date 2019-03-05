<template>
  <v-container fill-height grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 md8 offset-md2>
        <h1>Current Weather</h1>
        <v-layout row wrap>
          <v-flex xs10 offset-xs1 md6 offset-md3>
            <v-text-field
              @keypress.enter="getLatLong(address)"
              v-model="address"
              label="Location"
              prepend-inner-icon="place"
              autofocus
              clearable
              outline
            ></v-text-field>
          </v-flex>
        </v-layout>
        <CurrentWeather />
        <WeatherForecastItem v-for="(n, i) in 5" :key="i" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CurrentWeather from "../components/CurrentWeather";
import WeatherForecastItem from "../components/WeatherForecastItem";

export default {
  data() {
    return {
      address: ""
    };
  },
  components: {
    CurrentWeather,
    WeatherForecastItem
  },
  methods: {
    getLatLong(address) {
      // Convert address to lat/long using Google's Geocoding API
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${
          process.env.VUE_APP_GOOGLE_KEY
        }`
      ).then(async resp => {
        const response = await resp.json();
        // Setup location object from Google's response
        const location = {
          lat: response.results[0].geometry.location.lat,
          long: response.results[0].geometry.location.lng
        };

        // Fetch Dark Sky weather for input location
        this.$store.dispatch("getWeather", location);
      });
    }
  }
};
</script>
