<template>
  <div v-if="Object.keys(weather).length">
    {{ weather.currently.temperature }}
  </div>
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
