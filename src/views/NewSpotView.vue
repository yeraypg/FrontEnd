<template>
  <v-container>
    <v-row>
      <h1>NewSpot</h1>
    </v-row>
    <v-row>
      <NewSpotForm />
    </v-row>
    <v-spacer></v-spacer>
    <v-row><ButtonVolver justify-end align-end @getBack="goMain" /></v-row>
  </v-container>
</template>

<script>
import ButtonVolver from '../components/ButtonVolverComponent.vue'
import NewSpotForm from '../components/NewSpotForm.vue'
export default {
  name: 'NewSpotView',
  data () {
    return {
      newSpot: {}
    }
  },
  components: { ButtonVolver, NewSpotForm },
  methods: {
    goMain: function () {
      this.$router.push({ name: 'main' })
    }
  }
}
</script>
