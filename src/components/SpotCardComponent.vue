<template>
  <v-card
    @click="sendOneSpot(spot._id)"
    elevation="2"
    outlined
    rounded
    width="15vw"
    height="30vh"
  >
    <v-card-title>{{ spot.titleSpot }}</v-card-title>
    <ul>
      <li mx-4 v-for="flop in spot.flops" :key="flop._id">
        {{ flop.titleFlop }}
      </li>
    </ul>
  </v-card>
</template>

<script>
export default {
  name: 'SpotCardComponent',

  data: () => ({}),
  props: {
    spot: Object
  },
  methods: {
    goSpot: function () {
      this.$router.push({ name: 'spot' })
    },
    sendOneSpot: function (spotId) {
      const sendData = { spotId: spotId, spotData: this.spot }
      this.$emit('sendOneSpot', sendData)
    }
  }
}
</script>
<style scoped>
</style>
