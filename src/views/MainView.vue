<template>
  <v-container>
    <h1>MAIN PAGE</h1>
    <v-spacer></v-spacer>
    <v-btn x-large color="success" dark @click="goSpot">SPOT VIEW </v-btn>

    <v-btn x-large color="success" dark @click="goFlop">FLOP VIEW </v-btn>

    <v-btn x-large color="success" dark>EXAMPLE VIEW</v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'MainView',
  components: {},
  methods: {
    goSpot: function () {
      this.$router.push({ name: 'spot' })
    },
    goFlop: function () {
      this.$router.push({ name: 'flop' })
    },
    goExample: function () {
      this.$router.push({ name: 'example' })
    }
  }
}
</script>
