<template>
  <div>
    <h1 class="text-center">JEST testing playground   <v-img class="d-inline-block" src="https://jestjs.io/img/jest.png" contain width="40"></v-img></h1>
  
    <v-card class="mx-auto mt-2" width="600">
      <HelloWorld :title="title" :count="count" @increment="count++" @reset="count=0"/>
    </v-card>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  props: [""],
  components: { HelloWorld },
  data: () => ({
    count: 0,
    title: "Prop title"
  }),
  methods: {

  },
  computed: {},
};
</script>
