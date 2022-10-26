<template>
  <v-container class="container">
    <v-row heigth="60vh">
      <v-col cols="8" justify-start>
        <v-img :src="example.imageBoard" contain></v-img>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="4" justify-end>
        <v-img
          :src="example.imageHand"
          contain
          width="600"
          height="600"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'FlopCardImg',

  data: () => ({}),
  props: {
    example: Object
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-around;
}
</style>
