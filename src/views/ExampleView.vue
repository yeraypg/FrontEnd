<template>
  <div>
    <ExampleSliderComponent
      :examplesData="examplesData"
      @sendOneExample="getExample"
    />
    <h1>{{ example.text }}</h1>
    <h1>{{ example._id }}</h1>
  </div>
</template>

<script>
import ExampleSliderComponent from '../components/ExampleSliderComponent.vue'
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
  components: { ExampleSliderComponent },
  props: {
    sendData: Object
  },
  methods: {
    getExample: function (dataFromSlide) {
      this.example = dataFromSlide
    }
  },
  created () {
    this.examplesData = this.sendData.examples
    this.flopId = this.sendData._id
    this.spotId = this.sendData.spotId
  }
}
</script>
