<template>
  <v-container>
    <h1>SPOT PAGE</h1>
    <v-spacer></v-spacer>
    <v-btn x-large color="success" dark @click="goMain"
      >BACK TO MAIN VIEW
    </v-btn>
    <SpotCardComponent />
  </v-container>
</template>

<script>
import SpotCardComponent from '../components/SpotCardComponent.vue'
export default {
  name: 'SpotView',
  components: { SpotCardComponent },
  methods: {
    goMain: function () {
      this.$router.push({ name: 'main' })
    }
  }
}
</script>
