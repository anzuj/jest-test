<template>
  <v-container>
    <h4>{{ title }}</h4>
    <v-row align="center">
      <v-col cols="3">
        <div id="nr" class="mr-6">{{ count }}</div>
      </v-col>
      <v-col class="d-flex">
        <v-btn
          id="incrementBtn"
          class="mx-2"
          small
          outlined
          color="indigo"
          @click="increment($event)"
          ><v-icon>mdi-plus</v-icon>
        </v-btn>
        <br />
        <!-- <v-btn id="resetBtn" small outlined color="grey" @click="$emit('reset')"
          >Reset</v-btn
        > -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["title", "count"],
  data: () => ({}),
  methods: {
    increment() {
      this.$emit("increment");
    },
  },
};
</script>

<style>
#nr {
  font-size: 50px;
  font-weight: bold;
}
</style>
