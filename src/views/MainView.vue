<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <h1>MAIN PAGE</h1>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="4">
        <SelectTypeSpotComponent @changeSelectFilter="chageSelectFilter" />
      </v-col>
    </v-row>
    <v-container class="cardRows">
      <SpotCardComponent
        v-for="spot in getFilteredSpots"
        :key="spot.id"
        :spot="spot"
      />
    </v-container>
  </v-container>
</template>

<script>
import SpotCardComponent from '../components/SpotCardComponent.vue'
import { getAllSpots } from '../services/spotService'
import SelectTypeSpotComponent from '../components/SelectTypeSpotComponent.vue'

export default {
  name: 'MainView',
  data () {
    return {
      userSpots: [],
      typeSelect: 'SRP'
    }
  },
  components: { SpotCardComponent, SelectTypeSpotComponent },
  methods: {
    goMain: function () {
      this.$router.push({ name: 'main' })
    },
    getAllSpots: async function () {
      const data = await getAllSpots(localStorage.userId)
      this.userSpots = data
    },
    chageSelectFilter: function (type) {
      console.log(type)
      this.typeSelect = type
    }
  },
  computed: {
    getFilteredSpots: function () {
      return this.userSpots.filter((spot) => spot.type === this.typeSelect)
    }
  },
  created () {
    this.getAllSpots()
  }
}
</script>
<style scoped>
.cardRows {
  display: flex;
}
</style>
