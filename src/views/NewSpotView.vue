<template>
  <v-container>
    <v-row>
      <h1>NewSpot</h1>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NewSpotView',
  data () {
    return {
      spotData: {},
      spotId: ''
    }
  },
  components: {},
  methods: {
    goMain: function () {
      this.$router.push({ name: 'main' })
    },
    clickFlop: function (sendData) {
      this.$router.push({ name: 'flop', params: { sendData } })
    }
  }
}
</script>
