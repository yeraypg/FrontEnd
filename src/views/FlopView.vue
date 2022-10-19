<template>
  <div>
    <h1>FLOP PAGE</h1>
    <v-btn x-large color="success" dark @click="goMain"
      >BACK TO MAIN VIEW
    </v-btn>
    <v-btn x-large color="success" dark @click="goSpot"
      >BACK TO SPOT VIEW
    </v-btn>
    <FlopCardComponent />
  </div>
</template>

<script>
import FlopCardComponent from '../components/FlopCardComponent.vue'

export default {
  name: 'FlopView',
  components: { FlopCardComponent },
  methods: {
    goMain: function () {
      this.$router.push({ name: 'main' })
    },
    goSpot: function () {
      this.$router.push({ name: 'spot' })
    }
  }
}
</script>
