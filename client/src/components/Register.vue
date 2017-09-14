import RestResource from './services/RestResource';

<template>
  <div>
    <h1>{{ msg }}</h1>

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
    <button
      @click="register">
      Register
    </button>
  </div>
</template>

<script> // your controller!
import Authentication from '../services/Authentication.js'
export default {
  data () {
    return {
      msg: 'This is the register end point',
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
