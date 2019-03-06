<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Weather</span>
        <span class="font-weight-light"> App</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="getLocation">
        <span class="mr-2">Use My Location</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Loading
        :active.sync="isLoading"
        :height="128"
        :width="128"
        :can-cancel="false"
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
import { mapState } from "vuex";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "App",
  components: { Loading },
  computed: mapState({
    isLoading: "isLoading",
    fullPage: "fullPage"
  }),
  methods: {
    getLocation() {
      this.$store.dispatch("getLocation", { currentLocation: true });
    }
  }
};
</script>
