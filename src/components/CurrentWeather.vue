<template>
  <div>{{ weather.currently.temperature }}</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState({
    weather: "weather"
  })
};
</script>

<style scoped></style>
