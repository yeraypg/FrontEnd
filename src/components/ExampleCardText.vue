<template>
  <v-card class="mr-auto my-auto" width="95%" height="100%">
    <v-card-text>{{ flopData.theory }}</v-card-text>
    <v-card-text>{{ flopData.exploit }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'FlopCardtext',
  props: {
    flopData: Object
  }
}
</script>

<style scoped>
</style>
