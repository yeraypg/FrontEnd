<template>
  <v-container class="container">
    <v-row heigth="60vh">
      <v-col cols="8" justify-start class="px-0">
        <v-card
          elevation="10"
          width="100%"
          class="d-flex align-center justify-center"
        >
          <v-img :src="example.imageBoard" width="100%" elevation="10"></v-img>
        </v-card>
      </v-col>
      <v-col cols="3" justify-center class="pr-0">
        <v-card
          elevation="10"
          width="100%"
          class="d-flex align-center justify-center"
        >
          <v-img
            :src="example.imageHand"
            contain
            max-width="95%"
            height="600"
          ></v-img>
        </v-card>
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
.v-img {
  max-width: 100%;
}
</style>
