<template>
  <v-container>
    <transition name="fade">
      <v-container v-if="editMode == 'show'">
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
            <v-card-text class="text-wrap">
              Solución teórica: {{ spotData.theory }}
            </v-card-text>
            <v-card-text> explotación:{{ spotData.exploit }}</v-card-text>
          </v-card></v-row
        >
        <v-row class="buttons">
          <ButtonAdd @addNew="modeAdd" />
          <ButtonModify @modify="modeEdit" />
          <ButtonDelete @delOne="delSpot" />
          <ButtonVolver @getBack="goMain" />
        </v-row>
      </v-container>
    </transition>
    <transition name="fade">
      <v-container class="form" v-if="editMode == 'edit'">
        <SpotForm :mode="mode" :spot="spotData" @goModeShow="modeShow" />
        <ButtonVolver />
      </v-container>
    </transition>
    <transition name="fade">
      <v-container class="form" v-if="editMode == 'add'">
        <FlopForm :mode="mode" :spotId="spotData._id" @goModeShow="modeShow" />
        <ButtonVolver />
      </v-container>
    </transition>
  </v-container>
</template>

<script>
import FlopSliderComponent from '../components/FlopSliderComponent.vue'
import { getOneSpot, deleteSpot } from '../services/spotService'
import ButtonAdd from '../components/ButtonAddComponent.vue'
import ButtonVolver from '../components/ButtonVolverComponent.vue'
import ButtonModify from '../components/ButtonModifyComponent.vue'
import ButtonDelete from '../components/ButtonDeleteComponent.vue'
import FlopForm from '../components/NewFlopForm.vue'
import SpotForm from '../components/NewSpotForm.vue'

export default {
  name: 'SpotView',
  data () {
    return {
      spotData: {},
      editMode: 'show',
      mode: ''
    }
  },
  components: {
    FlopSliderComponent,
    ButtonAdd,
    ButtonVolver,
    ButtonModify,
    ButtonDelete,
    FlopForm,
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
    modeAdd: function () {
      this.editMode = 'add'
      this.mode = 'create'
    },
    getOneSpot: async function () {
      const response = await getOneSpot(this.sendData.spotId)
      this.spotData = response
    },
    modeEdit: function () {
      this.editMode = 'edit'
      this.mode = 'edit'
    },
    modeShow: function () {
      this.editMode = 'show'
    },
    delSpot: async function () {
      await deleteSpot(this.spotData._id)
      this.$router.push({ name: 'main' })
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

.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: all 0.5s ease-in-out;
}

.fade-enter,
.fade-leave {
  opacity: 0;
}
</style>
