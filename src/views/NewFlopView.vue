<template>
  <v-container>
    <v-row>
      <h1>Crear nuevo Flop</h1>
    </v-row>
    <v-row>
      <NewFlopForm />
    </v-row>
    <v-spacer></v-spacer>
    <v-row><ButtonVolver @getBack="goSpot" /> </v-row>
  </v-container>
</template>

<script>
import NewFlopForm from '../components/NewFlopForm.vue'
import ButtonVolver from '../components/ButtonVolverComponent.vue'
export default {
  name: 'NewFlopView',
  data () {
    return {
      newFlop: {}
    }
  },
  props: {
    sendData: Object
  },
  components: { NewFlopForm, ButtonVolver },
  methods: {
    goSpot: function () {
      const sendData = this.sendData
      this.$router.push({ name: 'spot', params: { sendData } })
    }
  }
}
</script>
