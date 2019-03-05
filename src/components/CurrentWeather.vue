<template>
  <div>Current Weather Component</div>
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
