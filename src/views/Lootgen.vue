<template>
  <div>
    <!-- <v-btn class="d-flex mx-auto mb-4" @click="chooseDescription"
      >Generate description</v-btn
    > -->

    <h4 class="mb-2">Random loot generator</h4>
    <v-card flat class="lootCard">

  

      <div class="d-flex align-center lootSection">
        <!-- loot image -->
        <div class="bg">
          <v-img
            :key="quality"
            :src="require(`@/assets/lootgen/${quality}.png`)"
          ></v-img>
          <v-img
            :key="weapon"
            class="lootPic loot-pop"
            :src="require(`@/assets/lootgen/weapons/${weapon}.png`)"
          ></v-img>
        </div>

        <!-- loot description -->
        <div>
          <h3 :style="{ color: qualityColor }">
            {{ adjective }} {{ weapon }} of {{ origin }}
          </h3>
          <div class="quality" :style="{ backgroundColor: labelColor }">
            {{ quality }}
          </div>
          <p class="description">"{{ description }}"</p>
        </div>
      </div>

              <!-- coin -->
        <div class="lootSection">

                {{ coin.gold }}
      <v-img
        class="coinPic"
        :src="require('@/assets/lootgen/gold.png')"
      ></v-img>
      {{ coin.silver }}
      <v-img
        class="coinPic"
        :src="require('@/assets/lootgen/silver.png')"
      ></v-img>
      {{ coin.copper }}
      <v-img
        class="coinPic"
        :src="require('@/assets/lootgen/copper.png')"
      ></v-img>

        </div>

      <v-btn :ripple="false" dark color="#1E4C89" class="d-flex mt-3 mx-auto" @click="getItem">Generate another</v-btn>
    </v-card>
  </div>
</template>

<script>
import { weaponDescriptions } from "../utils/descriptions";
import { lootAdjectives } from "../utils/adjectives";
import { lootOrigins } from "../utils/origins";
export default {
  props: [""],
  components: {},
  mounted() {
    this.getItem();
  },
  data: () => ({
    coin: {
      gold: null,
      silver: null,
      copper: null,
    },
    weapon: "Dagger",
    quality: "Uncommon",
    description: null,
    descriptions: weaponDescriptions,
    adjectives: lootAdjectives,
    adjective: null,
    origin: null,
    origins: lootOrigins,
    weapons: [
      "Axe",
      "Bottle",
      "Bow",
      "Cutlass",
      "Dagger",
      "Fork",
      "Hammer",
      "Mace",
      "Pan",
      "Pin",
      "Pitchfork",
      "Plank",
      "Shovel",
      "Spoon",
      "Staff",
      "Stick",
      "Sword",
      "Wand",
    ],
    qualities: ["Common", "Uncommon", "Rare", "Epic"],
  }),
  methods: {
    chooseRandom(max) {
      return Math.floor(Math.random() * max);
    },
    getItem() {
      this.chooseWeapon();
      this.chooseQuality();
      this.chooseDescription();
      this.chooseAdjective();
      this.chooseOrigin();
      this.generateCoin();
    },
    chooseWeapon() {
      let pickedWeapon = this.weapons[this.chooseRandom(this.weapons.length)];

      if (pickedWeapon !== this.weapon) {
        this.weapon = pickedWeapon;
      } else {
        return this.chooseWeapon();
      }
    },
    chooseQuality() {
      let random = Math.floor(Math.random() * 100) + 1; //nr between 1 and 100

      let pickedQuality;
      if (random < 10) {
        pickedQuality = "Epic";
      } else if (random < 25) {
        pickedQuality = "Rare";
      } else if (random < 55) {
        pickedQuality = "Uncommon";
      } else {
        pickedQuality = "Common";
      }
      this.quality = pickedQuality;
      //   return pickedQuality;
    },
    chooseDescription() {
      let pickedDescription = this.descriptions[
        this.chooseRandom(this.descriptions.length)
      ];
      if (pickedDescription !== this.description) {
        this.description = pickedDescription;
      } else {
        return this.chooseDescription();
      }
    },
    chooseAdjective() {
      let pickedAdjective = this.adjectives[
        this.chooseRandom(this.adjectives.length)
      ];
      if (pickedAdjective !== this.adjective) {
        this.adjective = pickedAdjective;
      } else {
        return this.chooseAdjective();
      }
    },
    chooseOrigin() {
      let pickedOrigin = this.origins[this.chooseRandom(this.origins.length)];
      if (pickedOrigin !== this.origin) {
        this.origin = pickedOrigin;
      } else {
        return this.chooseOrigin();
      }
    },
    generateCoin() {
      this.coin.gold = Math.floor(Math.random() * 10) + 1;
      this.coin.silver = Math.floor(Math.random() * 99) + 1;
      this.coin.copper = Math.floor(Math.random() * 99) + 1;
    },
  },
  computed: {
    qualityColor() {
      if (this.quality === "Epic") {
        return "#612CA4";
      } else if (this.quality === "Rare") {
        return "#1E77C8";
      } else if (this.quality === "Uncommon") {
        return "#27A75D";
      } else {
        return "#616161";
      }
    },
    labelColor() {
      if (this.quality === "Epic") {
        return "#E3D8FE";
      } else if (this.quality === "Rare") {
        return "#D8F1FE";
      } else if (this.quality === "Uncommon") {
        return "#dafddc";
      } else {
        return "#ECECEC";
      }
    },
  },
};
</script>

<style scoped>
.bg {
  position: relative;
  height: 100px;
  width: 100px;
  margin-right: 10px;
}

.lootCard {
  background-color: #e9dcad;
  background-image: url("https://www.transparenttextures.com/patterns/old-wall.png") !important;
  background-repeat: repeat;
  padding: 10px;
}

.lootSection {
    /* border: 1px solid rgb(192, 166, 151); */
    background-color: rgba(255, 255, 255, 0.562);
    border-radius: 5px;
    margin-bottom: 3px;
    padding: 5px;
}
.lootPic {
  position: absolute;
  top: 4%;
  left: 2%;
  transform: scale(0.95);
}

.coinPic {
  width: 12px;
  display: inline-block;
  margin-right: 4px;
}

.quality {
  display: inline-block;
  text-transform: uppercase;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 3px;
}

.description {
  margin-top: 2px;
  font-style: italic;
  font-size: 13px;
}

@keyframes loot-pop {
  0% {
    transform: scale(0.95);
  }

  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(0.95);
  }
}

.loot-pop {
  animation: loot-pop 0.8s ease-in;
}
</style>
