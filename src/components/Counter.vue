<template>
  <v-container>

    <!-- prop count (passed from Home) -->
    <h2>Prop count:</h2>
    <div id="propTracker">{{ count }}</div>
    <v-btn ref="incrementProp" @click="increment($event)">Increase prop</v-btn>

    <!-- local count -->
    <h2>Local component count:</h2>
    <div id="localTracker">{{ localcount }}</div>
    <v-btn ref="incrementLocal" @click="localcount++">Increase local</v-btn>
  </v-container>
</template>

<script>
export default {
  props: ["count"],
  data: () => ({
    localcount: 0,
  }),
  methods: {
    increment() {
      this.$emit("increment");
    },
  },
};
</script>

<style scoped>
#propTracker, #localTracker {
  font-size: 50px;
  font-weight: bold;
  margin-right: 10px
}

h2:last-of-type{
  margin-top: 100px !important
}

</style>
