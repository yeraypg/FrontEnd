<template>
  <v-container>
    <h1>SPOT PAGE</h1>
    <v-spacer></v-spacer>
    <div>{{ spotData }}</div>
  </v-container>
</template>

<script>
import { getOneSpot } from '../services/spotService'

export default {
  name: 'SpotView',
  data () {
    return {
      spotData: {}
    }
  },
  components: {},
  methods: {
    goMain: function () {
      this.$router.push({ name: 'main' })
    },
    getOneSpot: async function () {
      const data = await getOneSpot(localStorage.userId)
      console.log(data)
    }
  },
  props: {
    spot: Object
  },
  created () {
    this.spotData = this.spot
  }
}
</script>
