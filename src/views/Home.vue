<template>
  <v-container fill-height grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 md8 offset-md2>
        <v-layout row wrap>
          <v-flex xs10 offset-xs1 md6 offset-md3>
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
        <CurrentWeather />
        <WeatherForecastItem v-for="(n, i) in 5" :key="i" />
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
