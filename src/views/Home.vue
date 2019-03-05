<template>
  <v-container fill-height grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 md8 offset-md2>
        <h1>Current Weather</h1>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Location"
        />
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
  components: {
    CurrentWeather,
    WeatherForecastItem
  }
};
</script>
