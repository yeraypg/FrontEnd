<template>
  <v-container>
    <h1>MAIN PAGE</h1>
    <v-container class="cardRows">
      <SpotCardComponent v-for="spot in userSpots" :key="spot.id" :spot="spot"/>
    </v-container>
  </v-container>
</template>

<script>
import SpotCardComponent from '../components/SpotCardComponent.vue'
import { getAllSpots } from '../services/spotService'

export default {
  name: 'MainView',
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
<style scoped>
.cardRows{
  display: flex;
}
</style>
