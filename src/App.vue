<template>
  <div id="app">
    <Bookmakers msg="Kupuon 1 "/>
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
  text-align: center;
  color: #899bad;
  margin-top: 60px;
}
</style>
