<template>
  <v-container>
    <h2>API stuff</h2>
    <v-divider></v-divider>

    <h4>Faker.js</h4>
    <v-btn small @click="generateItem">Generate item</v-btn>
    <v-card v-if="itemGenerated" flat color="#FAEEB8" class="mt-4">
      <v-card-text>
        <div class="d-flex align-center">
          <v-img
            class="weaponImg"
            max-width="56"
            :src="require(`@/assets/weapons/${weapon}.jpg`)"
          ></v-img>
          <div>
            <h4>{{ weaponName }}</h4>
            <div>Damage: 32-35</div>
          </div>
        </div>

        <p>Description: {{ description }}</p>

        <p class="font-italic mt-3">"{{ phrase }}!"</p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: [""],
  components: {},
  data: () => ({
    itemGenerated: false,
    weaponName: null,
    weapon: null,
    description: null,
    phrase: null,
    weapons: [
      "Bow",
      "Knife",
      "Dagger",
      "Sabre",
      "Shovel",
      "Cutlass",
      "Sword",
      "Hammer",
      "Axe",
      "Polearm",
      "Mace",
      "Staff",
      "Whip",
      "Spear",
      "Wand",
      "Spoon",
      "Fork"
    ],
  }),
  methods: {
    generateItem() {
      let adj = this.$faker().commerce.productAdjective();
      let material = this.$faker().commerce.productMaterial();

      this.weaponName = `${adj} ${material} ${this.generateWeapon()} `;

        this.description = this.$faker().commerce.productDescription();
      this.phrase = this.$faker().company.catchPhrase();
      this.itemGenerated = true;
    },
    generateWeapon() {
      let random = Math.floor(Math.random() * 17); //from 15 weapons available weapons
      this.weapon = this.weapons[random];
      return this.weapons[random];
    },
  },
  computed: {},
};
</script>

<style>
.weaponImg {
  margin-right: 15px;
  clip-path: polygon(
    20% 0%,
    80% 0%,
    100% 20%,
    100% 80%,
    80% 100%,
    20% 100%,
    0% 80%,
    0% 20%
  );
}
</style>
