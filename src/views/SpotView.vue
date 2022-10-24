<template>
  <v-container>
    <v-row>
      <h1>Spot: {{ spotData.titleSpot }}</h1>
      <v-spacer></v-spacer>
      <h1>Type: {{ spotData.type }}</h1>
    </v-row>
    <v-row
      ><h1>Flops</h1>
      <FlopSliderComponent :flops="spotData.flops" @sendOneflop="clickFlop"
    /></v-row>
    <v-row>
      <v-card elevation="6" height="70vh">
        {{ spotData.text }}
      </v-card></v-row
    >
    <v-row class="buttons">
      <ButtonAdd @addNew="goAddFlop" />
      <ButtonVolver @getBack="goMain" />
      <ButtonModify />
      <ButtonDelete />
    </v-row>
  </v-container>
</template>

<script>
import FlopSliderComponent from '../components/FlopSliderComponent.vue'
import { getOneSpot } from '../services/spotService'
import ButtonAdd from '../components/ButtonAddComponent.vue'
import ButtonVolver from '../components/ButtonVolverComponent.vue'
import ButtonModify from '../components/ButtonModifyComponent.vue'
import ButtonDelete from '../components/ButtonDeleteComponent.vue'

export default {
  name: 'SpotView',
  data () {
    return {
      spotData: {}
    }
  },
  components: {
    FlopSliderComponent,
    ButtonAdd,
    ButtonVolver,
    ButtonModify,
    ButtonDelete
  },
  methods: {
    goMain: function () {
      this.$router.push({ name: 'main' })
    },
    clickFlop: function (flopId) {
      const sendData = this.sendData
      sendData.flopId = flopId
      this.$router.push({ name: 'flop', params: { sendData } })
    },
    goAddFlop: function () {
      const sendData = this.sendData
      this.$router.push({ name: 'newFlop', params: { sendData } })
    },
    getOneSpot: async function () {
      const response = await getOneSpot(this.sendData.spotId)
      this.spotData = response
    }
  },
  props: {
    sendData: Object
  },
  created () {
    this.getOneSpot()
  }
}
</script>
