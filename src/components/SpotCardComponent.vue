<template>
  <v-card elevation="2" outlined rounded width="25vw">
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
    }
  }
}
</script>
<style scoped>
</style>
