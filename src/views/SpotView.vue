<template>
  <v-container>
    <v-container v-if="!editMode">
      <v-row>
        <v-container>
          <h1>Spot: {{ spotData.titleSpot }}</h1>
          <v-spacer></v-spacer>
          <h1>Type: {{ spotData.type }}</h1></v-container
        >
      </v-row>
      <v-row
        ><h1>Flops</h1>
        <FlopSliderComponent :flops="spotData.flops" @sendOneflop="clickFlop"
      /></v-row>
      <v-row>
        <v-card elevation="6" height="70vh">
          <v-card-text> Solución teórica: {{ spotData.theory }} </v-card-text>
          <v-card-text> explotación:{{ spotData.exploit }}</v-card-text>
        </v-card></v-row
      >
      <v-row class="buttons">
        <ButtonAdd @addNew="goAddFlop" />
        <ButtonVolver @getBack="goMain" />
        <ButtonModify @modify="goEdit" />
        <ButtonDelete />
      </v-row>
    </v-container>
    <v-container class="form" v-if="editMode">
      <SpotForm :spot="spotData" />
      <ButtonVolver />
    </v-container>
  </v-container>
</template>

<script>
import FlopSliderComponent from '../components/FlopSliderComponent.vue'
import { getOneSpot } from '../services/spotService'
import ButtonAdd from '../components/ButtonAddComponent.vue'
import ButtonVolver from '../components/ButtonVolverComponent.vue'
import ButtonModify from '../components/ButtonModifyComponent.vue'
import ButtonDelete from '../components/ButtonDeleteComponent.vue'
import SpotForm from '../components/NewSpotForm.vue'

export default {
  name: 'SpotView',
  data () {
    return {
      spotData: {},
      editMode: false
    }
  },
  components: {
    FlopSliderComponent,
    ButtonAdd,
    ButtonVolver,
    ButtonModify,
    ButtonDelete,
    SpotForm
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
    },
    goEdit: function () {
      this.editMode = !this.editMode
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
<style scoped>
.form * {
  margin: 20px;
}
</style>
