<template>
  <div id="app">
     <Bookmakers msg="Kupuon text " TeamA="Ireland"  TeamB="Italy"/>
     <Bookmakers msg="Kupuon text " TeamA="Scarlets" TeamB="Cheateas"/>
  </div>
</template>

<script>

import Bookmakers from './components/Bookmakers.vue'

export default {
  name: 'app',
  components: {
    Bookmakers
  },
  data: function(){
    return {
        
    }
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #899bad;
  margin-top: 60px;
}
</style>
