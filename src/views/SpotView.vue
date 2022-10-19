<template>
  <v-container>
    <h1>SPOT PAGE</h1>
    <v-spacer></v-spacer>
    <v-btn x-large color="success" dark @click="goMain"
      >BACK TO MAIN VIEW
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'SpotView',
  components: {},
  methods: {
    goMain: function () {
      this.$router.push({ name: 'main' })
    }
  }
}
</script>
