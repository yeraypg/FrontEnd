<template>
  <v-container>
    <v-row>
      <h1>Spot: {{ spotData.titleSpot }}</h1>
      <v-spacer></v-spacer>
      <h1>Type: {{ spotData.type }}</h1>
    </v-row>
    <v-divider></v-divider>
    <h1>Flops</h1>
    <FlopSliderComponent :flops="spotData.flops" @sendOneflop="clickFlop" />
    <v-card elevation="6" height="70vh">
      {{ spotData.text }}
    </v-card>
  </v-container>
</template>

<script>
import FlopSliderComponent from '../components/FlopSliderComponent.vue'

export default {
  name: 'SpotView',
  data () {
    return {
      spotData: {},
      spotId: ''
    }
  },
  components: { FlopSliderComponent },
  methods: {
    goMain: function () {
      this.$router.push({ name: 'main' })
    },
    clickFlop: function (sendData) {
      this.$router.push({ name: 'flop', params: { sendData } })
    }
  },
  props: {
    sendData: Object
  },
  created () {
    this.spotData = this.sendData.spotData
    this.spotId = this.sendData.spotId
  }
}
</script>
