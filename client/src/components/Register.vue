import RestResource from './services/RestResource';

<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
    <div class="white elevation-2">
      <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>{{msg}}</v-toolbar-title>
      </v-toolbar>
    </div>
    <div class="pl-4 pr-4 pt-2 pb-2">
      <input
        type="email"
        name="email"
        v-model="email"
        placeholder="email"/>
      <br>
      <input
        type="password"
        name="password"
        v-model="password"
        placeholder="password"/>
      <br>
      <div
        class="error"
        v-html="error"/>
      <br>
      <v-btn
        class="cyan"
        @click="register">
        Register
      </v-btn>
    </div>
  </v-flex>
</v-layout>
</template>

<script> // your controller!
import Authentication from '../services/Authentication.js'
export default {
  data () {
    return {
      msg: 'Register',
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await Authentication.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
