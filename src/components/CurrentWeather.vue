<template>
  <v-layout v-if="Object.keys(weather).length">
    <v-flex xs12 sm2 offset-sm5>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">
              {{ Math.round(weather.currently.temperature) }}&#176; F
            </h3>
            <div>
              {{ weather.currently.summary }}
            </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["weather"])
  }
};
</script>

<style scoped></style>
