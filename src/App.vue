<template>
  <V-app id="app">
    <AddSchedule v-if="this.$store.getters.addSchedule"></AddSchedule>
    <NavigationBar></NavigationBar>
    <ErrorSnackBar></ErrorSnackBar>
    <CalendarBoard></CalendarBoard>
  </V-app>
</template>

<script>
import ErrorSnackBar from "./components/NavigationBar.vue";
import NavigationBar from "./components/ErrorSnackBar.vue";
import AddSchedule from "./components/AddSchedule.vue";
import CalendarBoard from "./views/CalendarBoard.vue";

export default {
  name: "App",
  components: {
    ErrorSnackBar,
    NavigationBar,
    CalendarBoard,
    AddSchedule,
  },
};
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
