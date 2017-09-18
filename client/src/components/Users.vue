import RestResource from './services/RestResource';

<template>
<v-layout column>
  <v-flex xs6 offset-xs3>
    <div class="white elevation-2">
      <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>Show all Users</v-toolbar-title>
      </v-toolbar>
    </div>
    <div class="pl-4 pr-4 pt-2 pb-2">
      <v-btn
        class="cyan"
        @click="showAllUsers">
        Show all users
      </v-btn>
      <v-btn
        class="cyan"
        @click="clearScreen">
        Clear all users
      </v-btn>
      <div id="showData"></div>
    </div>
  </v-flex>
</v-layout>
</template>

<script> // your controller!
import Authentication from '../services/Authentication.js'
const axios = require('axios')
export default {
  data () {
    return {
      msg: '',
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
    },
    showAllUsers: function () {
      // var self = this
      console.log('it works..! we want to show all users now.')
      axios.get('http://localhost:3000/users')
      .then(function (response) {
        var col = []
        for (var i = 0; i < response.data.length; i++) {
          for (var key in response.data[i]) {
            if (col.indexOf(key) === -1) {
              col.push(key)
            }
          }
        }
        console.log(response.data.length)
        // create table
        var table = document.createElement('table')
        // create header row
        var tr = table.insertRow(-1)
        // create table header from json
        for (var j = 0; j < col.length; j++) {
          var th = document.createElement('th')      // TABLE HEADER.
          th.innerHTML = col[j]
          tr.appendChild(th)
        }
        // fill rows and header with available data.
        for (var k = 0; k < response.data.length; k++) {
          tr = table.insertRow(-1)
          for (var l = 0; l < col.length; l++) {
            var tabCell = tr.insertCell(-1)
            tabCell.innerHTML = response.data[k][col[l]]
          }
        }
        var divContainer = document.getElementById('showData')
        divContainer.innerHTML = ''
        divContainer.appendChild(table)
      })
    },
    clearScreen () {
      console.log('Screen should be emptied!')
      this.msg = ''
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
