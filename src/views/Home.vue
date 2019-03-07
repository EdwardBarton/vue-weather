<template>
  <v-container fill-height grid-list-sm text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <!-- Input row -->
        <v-layout row wrap>
          <v-flex xs10 offset-xs1 sm4 offset-sm4>
            <v-text-field
              @keypress.enter="getLocation(address)"
              v-model="address"
              label="Address"
              prepend-inner-icon="place"
              autofocus
              clearable
              outline
            ></v-text-field>
          </v-flex>
        </v-layout>
        <div class="weather-info" v-if="Object.keys(weather).length">
          <!-- Current Weather row -->
          <v-layout row wrap mb-4>
            <v-flex>
              <h2>Currently</h2>
              <CurrentWeather />
            </v-flex>
          </v-layout>
          <!-- Forecast row -->
          <v-layout row wrap>
            <v-flex>
              <h2>Five Day Forecast</h2>
              <v-layout justify-space-between>
                <WeatherForecastItem
                  v-for="index in 5"
                  :key="index"
                  :day="weather.daily.data[index]"
                />
              </v-layout>
            </v-flex>
          </v-layout>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import CurrentWeather from "../components/CurrentWeather";
import WeatherForecastItem from "../components/WeatherForecastItem";

export default {
  data() {
    return {
      address: ""
    };
  },
  computed: {
    ...mapState(["weather", "isLoading", "fullPage"])
  },
  components: {
    CurrentWeather,
    WeatherForecastItem
  },
  methods: {
    getLocation(address) {
      this.$store.dispatch("getLocation", { address });
    }
  }
};
</script>

<style scoped></style>
