<template>
  <v-card class="mr-auto my-auto" width="95%" height="100%">
    <v-card-text>{{ text }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'FlopCardtext',
  props: {
    text: String
  }
}
</script>

<style scoped>
</style>
