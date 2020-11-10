<template>
  <div>
    <p class="text-center pt-2">Select a playground:</p>

    <v-row justify="center" class="py-5">
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="item in links"
        :key="item.link"
      >
        <v-card dark @click="handleNav(item.link)" class="pa-3 linkThumb">
          <v-icon>{{ item.icon }}</v-icon> <span>{{ item.text }}</span>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        text: "Counter",
        link: "counter",
        icon: "mdi-numeric-0-box-multiple-outline",
      },
      { text: "APIs", link: "api", icon: "mdi-api" },{ text: "Loot", link: "loot", icon: "mdi-sword" }
    ],
  }),
  methods: {
    handleNav(link) {
      if (this.$route.name !== link) {
        this.$router.push({ name: link });
      }
    },
  },
  computed: {},
};
</script>

<style>

.linkThumb{
    background-color: rgb(36, 93, 100)  !important

}
.linkThumb:hover{
    background: linear-gradient(to bottom right, rgb(131, 63, 95), rgb(87, 29, 53) ) !important

}

.linkThumb:hover i{
    transform: rotate(13deg)

}
</style>
