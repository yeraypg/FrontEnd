<template>
  <div>
    <ExampleSliderComponent
      :examplesData="examplesData"
      @sendOneExample="getExample"
    />
    <h1>{{ example.text }}</h1>
    <h1>{{ example._id }}</h1>
    <ButtonAdd @addNew="goAddExample" />
    <ButtonVolver @getBack="goFlop" />
  </div>
</template>

<script>
import ExampleSliderComponent from '../components/ExampleSliderComponent.vue'
import { getAllExamples } from '../services/exampleService'
import ButtonVolver from '../components/ButtonVolverComponent.vue'
import ButtonAdd from '../components/ButtonAddComponent.vue'
export default {
  name: 'ExampleView',
  data () {
    return {
      examplesData: [],
      flopId: '',
      spotId: '',
      example: {}
    }
  },
  components: { ExampleSliderComponent, ButtonVolver, ButtonAdd },
  props: {
    sendData: Object
  },
  methods: {
    getExample: function (dataFromSlide) {
      this.example = dataFromSlide
    },
    goAddExample: function () {
      const sendData = this.sendData
      this.$router.push({ name: 'newExample', params: { sendData } })
    },
    getAllExamples: async function () {
      const response = await getAllExamples(this.sendData)
      this.examplesData = response
    },
    goFlop: function () {
      const sendData = this.sendData
      this.$router.push({ name: 'flop', params: { sendData } })
    }
  },
  created () {
    this.getAllExamples()
  }
}
</script>
