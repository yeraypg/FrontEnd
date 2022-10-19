<template>
  <v-container>
    <h1>SPOT PAGE</h1>
    <v-spacer></v-spacer>
    <v-btn x-large color="success" dark @click="goMain"
      >BACK TO MAIN VIEW
    </v-btn>
    <v-btn x-large color="success" dark @click="getAllSpots">getAllSpots</v-btn>
    <SpotCardComponent v-for="spot in userSpots" :key="spot.id" />
  </v-container>
</template>

<script>
import SpotCardComponent from '../components/SpotCardComponent.vue'
import { getAllSpots } from '../services/spotService'

export default {
  name: 'SpotView',
  data () {
    return {
      userSpots: []
    }
  },
  components: { SpotCardComponent },
  methods: {
    goMain: function () {
      this.$router.push({ name: 'main' })
    },
    getAllSpots: async function () {
      const data = await getAllSpots(localStorage.userId)
      this.userSpots = data
    }
  },
  created () {
    this.getAllSpots()
  }
}
</script>
