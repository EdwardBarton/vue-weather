<template>
  <v-flex xs12 sm2>
    <v-card>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ dayOfWeek }}</h3>
          <div>{{ Math.round(day.temperatureHigh) }}&#176; F</div>
          <div>{{ day.summary }}</div>
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      dayOfWeek: ""
    };
  },
  props: ["day"],
  created() {
    const timestamp = this.day.time;
    const a = new Date(timestamp * 1000);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const dayOfWeek = days[a.getDay()];
    this.dayOfWeek = dayOfWeek;
  }
};
</script>

<style scoped></style>
