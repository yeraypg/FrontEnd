<template>
  <v-card>
    <v-card-title class="title justify-center">Login</v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="email"
          label="Email"
          prepend-icon="mdi-account-circle"
        >
        </v-text-field>
        <v-text-field
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          :rules="passwordRules"
        >
        </v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions class="justify-center">
      <v-btn dark @click="changeSignUp" class="ma-4">Go to SignUp</v-btn>
      <v-btn color="primary" @click="login" ma-4>Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'LoginComponent',

  data () {
    return {
      showPassword: false,
      password: '',
      email: ''
    }
  },
  methods: {
    changeSignUp: function () {
      this.$emit('changeComponent')
    }
  }
}
</script>
<style scoped>
.title {
  font-size: 2em !important;
}
</style>
