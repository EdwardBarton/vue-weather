<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Current</span>
        <span class="font-weight-light"> Weather</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="getMyLocation">
        <span class="mr-2">Get My Location</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Loading
        :active.sync="isLoading"
        :can-cancel="true"
        :is-full-page="fullPage"
        color="#1976d2"
        loader="dots"
        background-color="#aaa"
      />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "App",
  components: { Loading },
  data() {
    return {
      isLoading: false,
      fullPage: true
    };
  },
  methods: {
    getMyLocation() {
      this.isLoading = true;
      // Get location via browser
      navigator.geolocation.getCurrentPosition(async position => {
        const location = {
          lat: position.coords.latitude,
          long: position.coords.longitude
        };

        // Get weather from Dark Sky API
        await this.$store.dispatch("getWeather", location);
        this.isLoading = false;
      });
    }
  }
};
</script>
