<template>
  <v-card
    @click="sendOneSpot(spot)"
    elevation="10"
    outlined
    rounded
    width="15vw"
    height="25vh"
  >
    <v-card-title class="center">{{ spot.titleSpot }}</v-card-title>
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
    sendOneSpot: function (sendData) {
      this.$emit('sendOneSpot', sendData)
    }
  }
}
</script>
<style scoped>
.v-card {
  overflow: auto;
}
</style>
