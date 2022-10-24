<template>
  <v-container>
    <v-card elevation="6">
      <v-form width="70vw" ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="spot"
          disabled
          label="Spot"
          required
        ></v-text-field>

        <v-text-field
          v-model="flop"
          disabled
          label="Flop"
          required
        ></v-text-field>

        <v-textarea
          hint="Texto"
          full-width
          no-resize
          prepend-icon="mdi-comment"
          height="20vh"
          label="Texto"
          v-model="text"
          color="teal"
        >
        </v-textarea>

        <v-file-input
          :rules="imgRules"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Pick an image"
          prepend-icon="mdi-cloud-upload"
          label="Imagen del Board"
        ></v-file-input>

        <v-file-input
          :rules="imgRules"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Pick an image"
          prepend-icon="mdi-cloud-upload"
          label="Imagen de la Mano"
        ></v-file-input>

        <v-file-input
          :rules="audRules"
          accept="audio/ogg, audio/mpeg"
          placeholder="Pick an audio"
          prepend-icon="mdi-cloud-upload"
          label="Audio"
        ></v-file-input>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Aceptar
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset"> Resetear Spot </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: 'NewExampleForm',
  data: () => ({
    spot: '',
    flop: '',
    valid: true,
    author: localStorage.userId,
    text: '',
    imageBoard: '',
    imageHand: '',
    audio: '',
    audRules: [
      (value) =>
        !value ||
        value.size < 15000000 ||
        'Image size should be less than 15 MB!'
    ],
    imgRules: [
      (value) =>
        !value || value.size < 2000000 || 'Image size should be less than 2 MB!'
    ]
  }),

  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>
<style scoped>
* {
  margin: 20px;
}
</style>
