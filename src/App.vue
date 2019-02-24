<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Bookmakers msg="Welcome to Your Bookmaker App"/>
  </div>
</template>

<script>

import Bookmakers from './components/Bookmakers.vue'

export default {
  name: 'app',
  components: {
    Bookmakers
  },
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
