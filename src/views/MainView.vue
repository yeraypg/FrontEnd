<template>
  <v-container>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="4">
        <SelectTypeSpotComponent @changeSelectFilter="chageSelectFilter" />
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-container class="cardRows">
        <div v-for="spot in getFilteredSpots" :key="spot.id">
          <SpotCardComponent @sendOneSpot="clickCard" :spot="spot" />
        </div>
      </v-container>
    </v-row>
    <v-row class="buttons">
      <button-add @addNew="goAddSpot" />
    </v-row>
  </v-container>
</template>

<script>
import SpotCardComponent from '../components/SpotCardComponent.vue'
import { getAllSpots } from '../services/spotService'
import SelectTypeSpotComponent from '../components/SelectTypeSpotComponent.vue'
import ButtonAdd from '../components/ButtonAddComponent.vue'

export default {
  name: 'MainView',
  data () {
    return {
      userSpots: [],
      typeSelect: 'SRP'
    }
  },
  components: {
    SpotCardComponent,
    SelectTypeSpotComponent,
    ButtonAdd
  },
  methods: {
    goAddSpot: function () {
      this.$router.push({ name: 'newSpot' })
    },
    getAllSpots: async function () {
      const data = await getAllSpots(localStorage.userId)
      this.userSpots = data
    },
    chageSelectFilter: function (type) {
      this.typeSelect = type
    },
    clickCard: function (spot) {
      const sendData = { spotId: spot._id, flopId: '', exampleId: '' }
      this.$router.push({ name: 'spot', params: { sendData } })
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
  height: 70vh;
  display: flex;
  justify-content: space-around;
}
.buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
</style>
