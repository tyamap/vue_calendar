<template>
  <div id="app">
    <NavigationBar></NavigationBar>
    <ErrorSnackBar></ErrorSnackBar>
    <CalendarBoard></CalendarBoard>
  </div>
</template>

<script>
import ErrorSnackBar from './components/NavigationBar.vue'
import NavigationBar from './components/ErrorSnackBar.vue'
import CalendarBoard from './views/CalendarBoard.vue'

export default {
  name: 'App',
  components: {
    ErrorSnackBar,
    NavigationBar,
    CalendarBoard,
  }
}
</script>

<style>
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  margin: 0;
}
</style>
