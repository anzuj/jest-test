<template>
  <div>
      <Counter :count="count" @increment="count++"/>
  </div>
</template>

<script>
import Counter from "@/components/Counter.vue";
export default {
  components: { Counter },
  data: () => ({
    count: 0,
  }),
  methods: {
  },
  computed: {},
};
</script>
