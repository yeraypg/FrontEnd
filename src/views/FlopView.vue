<template>
  <v-container>
    <h1>FLOP PAGE</h1>
    <v-row>
      <v-col cols="3">
        <v-btn x-large color="success" dark @click="goMain"
          >BACK TO MAIN VIEW
        </v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn x-large color="success" dark @click="goSpot"
          >BACK TO SPOT VIEW
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="6">
        <FlopCardText />
      </v-col>
      <v-col cols="6">
        <FlopCardImg />
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
import FlopCardImg from '../components/FlopCardImg.vue'
import FlopCardText from '../components/FlopCardText.vue'

export default {
  name: 'FlopView',
  components: { FlopCardImg, FlopCardText },
  methods: {
    goMain: function () {
      this.$router.push({ name: 'main' })
    },
    goSpot: function () {
      this.$router.push({ name: 'spot' })
    }
  }
}
</script>
