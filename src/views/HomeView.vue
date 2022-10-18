<template>
  <v-container fill-height fluid>
    <v-row class="loginRow">
      <v-spacer></v-spacer>
      <v-col class="imgCol" cols="4">
        <v-img
          position="center"
          class="imgLogin"
          width="100%"
          height="100%"
          src="../assets/logform.png"
        >
        </v-img>
      </v-col>
      <v-col cols="4" class="pl-8">
        <transition name="component-fade" mode="out-in">
          <component @changeComponent="changeComponent" :is="state"></component>
        </transition>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
import SignUp from '../components/SignUp'
import LoginComponent from '../components/Login'

export default {
  name: 'HomeView',
  components: {
    SignUp,
    LoginComponent
  },
  data () {
    return {
      login: true,
      signUp: false
    }
  },
  methods: {
    changeComponent: function () {
      this.login = !this.login
      this.signUp = !this.signUp
    }
  },
  computed: {
    state: function () {
      if (this.login) return 'LoginComponent'
      return 'SignUp'
    }
  }
}
</script>
<style scoped>
.loginRow {
  align-items: center;
}
.imgCol {
  height: 60vh;
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.4s ease;
}
.component-fade-enter {
  opacity: 0;
}
.component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
