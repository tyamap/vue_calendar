<template>
  <div>
    <V-toolbar height="50px" color="cyan darken-3" dark flat>
      <V-app-bar-nav-icon></V-app-bar-nav-icon>
      <V-btn icon small @click="setLastMonth"
        ><V-icon>mdi-chevron-left</V-icon></V-btn
      >
      <V-btn icon small @click="setNextMonth"
        ><V-icon>mdi-chevron-right</V-icon></V-btn
      >
      <V-toolbar-title>{{ year }} / {{ month }}</V-toolbar-title>
      <V-spacer></V-spacer>
      <V-btn outlined small @click="setCurrentYearAndMonth">today</V-btn>
    </V-toolbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters(["year", "month"]),
  methods: mapActions([
    "setLastMonth",
    "setNextMonth",
    "setCurrentYearAndMonth",
  ]),
};
</script>
