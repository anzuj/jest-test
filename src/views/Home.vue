<template>
  <div>
    <h1 class="text-center">JEST testing playground   <v-img class="d-inline-block" src="https://jestjs.io/img/jest.png" contain width="40"></v-img></h1>
  
    <v-card class="mx-auto mt-2" width="600">
      <Counter :count="count" @increment="count++"/>
    </v-card>
  </div>
</template>

<script>
import Counter from "@/components/Counter.vue";
export default {
  props: [""],
  components: { Counter },
  data: () => ({
    count: 0,
    title: "Prop title"
  }),
  methods: {

  },
  computed: {},
};
</script>
