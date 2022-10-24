<template>
  <v-container>
    <v-row>
      <h1>Crear nuevo Example</h1>
    </v-row>
    <v-row>
      <NewExampleForm />
    </v-row>
    <v-spacer></v-spacer>
    <v-row><ButtonVolver @getBack="goExample" /> </v-row>
  </v-container>
</template>

<script>
import NewExampleForm from '../components/NewExampleForm.vue'
import ButtonVolver from '../components/ButtonVolverComponent.vue'
export default {
  name: 'NewExampleView',
  data () {
    return {
      newExample: {}
    }
  },
  props: {
    sendData: Object
  },
  components: { NewExampleForm, ButtonVolver },
  methods: {
    goExample: function () {
      const sendData = this.sendData
      this.$router.push({ name: 'example', params: { sendData } })
    }
  }
}
</script>
