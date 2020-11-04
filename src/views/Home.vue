<template>
  <div>
    <h1 class="text-center">HOME</h1>

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
  methods: {},
  computed: {},
};
</script>
