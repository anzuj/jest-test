<template>
  <div id="app">
    <v-app>
      <v-main fluid fill-height>
        <h1 @click="handleNav" class="text-center hover-pointer">
          JEST testing playground
          <v-img
            class="d-inline-block"
            src="https://jestjs.io/img/jest.png"
            contain
            width="40"
          ></v-img>
        </h1>
        <v-card class="mx-auto mt-2 pa-3" max-width="600">
          <router-view></router-view>
        </v-card>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  props: ["count"],
  data: () => ({}),
  methods: {
    handleNav() {
      if (this.$route.name !== "home") {
        this.$router.push({name: "home"});
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Montserrat, sans-serif;
  background: rgb(238, 238, 238);
  background-image: url("https://www.transparenttextures.com/patterns/black-thread-light.png");
  color: #25292e;
}
</style>
