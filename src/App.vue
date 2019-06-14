<template>
  <div id="app">
    <AUTHOR></AUTHOR>
    <router-view></router-view>
  </div>
</template>

<script>
import AUTHOR from './pages/aboutTheAuthor/index'
export default {
  name: 'app',
  components: {
    AUTHOR
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
</style>
