<template>
  <v-container>
    <h1>{{ flopData.titleFlop }}</h1>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="6">
        <FlopCardText :flopData="flopData" />
      </v-col>
      <v-col cols="6">
        <FlopCardImg />
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-btn x-large color="success" dark @click="goMain"
          >BACK TO MAIN VIEW
        </v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn x-large color="success" dark @click="goSpot(sendData.spot)"
          >BACK TO SPOT VIEW
        </v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn x-large color="success" dark @click="goExamples"
          >EXAMPLES
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FlopCardImg from '../components/FlopCardImg.vue'
import FlopCardText from '../components/FlopCardText.vue'
import { getOneFlop } from '../services/flopService.js'

export default {
  name: 'FlopView',
  components: { FlopCardImg, FlopCardText },
  data () {
    return {
      flopData: {}
    }
  },
  props: {
    sendData: Object
  },
  methods: {
    goMain: function () {
      this.$router.push({ name: 'main' })
    },
    goSpot: function (sendData) {
      this.$router.push({ name: 'spot', params: { sendData } })
    },
    goExamples: function () {
      const sendData = this.flopData
      this.$router.push({ name: 'example', params: { sendData } })
    },
    getOneFlop: async function () {
      const response = await getOneFlop(this.sendData)
      this.flopData = response
    }
  },
  created () {
    this.getOneFlop()
  }
}
</script>
