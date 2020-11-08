<template>
  <v-container>
    <p id="sample">cat</p>
    <h2>Prop count:</h2>
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
          ><v-icon>mdi-plus</v-icon> Increase prop
        </v-btn>
      </v-col>
    </v-row>
    <v-divider></v-divider>

    <h2>Local count:</h2>
    <v-row align="center">
      <v-col cols="3">
        <div id="nr" class="mr-6">{{ localcount }}</div>
      </v-col>
      <v-col class="d-flex">
        <v-btn
          id="incrementLocal"
          @click="localcount++"
          class="mx-2"
          small
          outlined
          color="indigo"
          ><v-icon>mdi-plus</v-icon> Increase local
        </v-btn>
      </v-col>
    </v-row>
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

<style>
#nr {
  font-size: 50px;
  font-weight: bold;
}
</style>
