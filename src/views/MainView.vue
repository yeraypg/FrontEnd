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
    </v-container >
  </v-row>
  <v-row >
    <v-container class="buttons">
    <button-accept />
    <button-cancel />
  </v-container>
  </v-row>
  </v-container>
</template>

<script>
import SpotCardComponent from '../components/SpotCardComponent.vue'
import { getAllSpots } from '../services/spotService'
import SelectTypeSpotComponent from '../components/SelectTypeSpotComponent.vue'
import ButtonAccept from '../components/ButtonAcceptComponent.vue'
import ButtonCancel from '../components/ButtonCancelComponent.vue'

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
    ButtonAccept,
    ButtonCancel
  },
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
    },
    clickCard: function (sendData) {
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
  justify-content: end;
  align-content: end;
}
</style>
