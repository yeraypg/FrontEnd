<template>
  <v-container>
    <v-card elevation="6">
      <v-form width="70vw" ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="title"
          :counter="6"
          :rules="titleRules"
          label="Título"
          required
        ></v-text-field>

        <v-select
          v-model="select"
          :items="types"
          :rules="[(v) => !!v || 'Type is required']"
          label="Tipo de Spot"
          required
        ></v-select>

        <v-textarea
          hint="Solución teórica"
          full-width
          no-resize
          prepend-icon="mdi-comment"
          height="20vh"
          label="Solución teórica"
          v-model="theory"
          color="teal"
        >
        </v-textarea>

        <v-textarea
          hint="Explotaciones"
          label="Explotaciones"
          full-width
          no-resize
          prepend-icon="mdi-comment"
          height="20vh"
          v-model="exploit"
          color="teal"
        >
        </v-textarea>

        <v-file-input
          :rules="imgRules"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Pick an image"
          prepend-icon="mdi-cloud-upload"
          label="Imagen"
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
  name: 'NewSpotForm',
  data: () => ({
    valid: true,
    author: localStorage.userId,
    title: '',
    theory: '',
    exploit: '',
    titleRules: [
      (v) => !!v || 'Title is required',
      (v) => (v && v.length >= 6) || 'Title must be greater than 6 characters'
    ],
    select: '',
    image: '',
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
    ],
    types: ['SRP', '3BET', '4BET']
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
