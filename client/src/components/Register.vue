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
    <button
    @click="register">
    Register</button>
  </div>
</template>

<script> // your controller!
import Authentication from '../services/Authentication.js'
export default {
  data () {
    return {
      msg: 'This is the register end point',
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await Authentication.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<style scoped>

</style>
