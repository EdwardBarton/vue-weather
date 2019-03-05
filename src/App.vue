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
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      lat: "",
      long: ""
    };
  },
  methods: {
    getMyLocation() {
      // Get location via browser
      navigator.geolocation.getCurrentPosition(position => {
        const location = {
          lat: position.coords.latitude,
          long: position.coords.longitude
        };

        // Get weather from Dark Sky API
        this.$store.dispatch("getWeather", location);
      });
    }
  }
};
</script>
