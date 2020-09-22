<template>
  <div id="navigation-bar">
    <V-toolbar height="50px" color="cyan darken-3" dark flat>
      <V-menu v-model="value" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <V-app-bar-nav-icon v-bind="attrs" v-on="on"> </V-app-bar-nav-icon>
        </template>
        <v-list dense>
          <v-list-item
            v-for="(item, index) in menu"
            :key="index"
            @click.prevent
          >
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </V-menu>
      <V-btn icon small @click="setLastMonth"
        ><V-icon>mdi-chevron-left</V-icon></V-btn
      >
      <V-btn icon small @click="setNextMonth"
        ><V-icon>mdi-chevron-right</V-icon></V-btn
      >
      <V-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <V-toolbar-title v-bind="attrs" v-on="on" @click="setPicker">
            {{ year }} / {{ month }}
          </V-toolbar-title>
        </template>
        <V-date-picker
          v-model="picker"
          elevation="15"
          type="month"
          color="pink lighten-3"
          @input="setYearMonth"
          reactive
        ></V-date-picker>
      </V-menu>
      <V-spacer></V-spacer>
      <V-btn outlined small @click="setCurrentYearAndMonth">today</V-btn>
    </V-toolbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      value: null,
      picker: null,
      menu: ["月別", "週別 /未実装", "日別 /未実装"],
    };
  },
  computed: {
    ...mapGetters(["year", "month", "today"]),
  },
  methods: {
    ...mapActions(["setLastMonth", "setNextMonth", "setCurrentYearAndMonth"]),
    setYearMonth: function() {
      const year = Number(this.picker.slice(0, 4));
      const month = Number(this.picker.slice(-2));
      this.$store.dispatch("setYear", year);
      this.$store.dispatch("setMonth", month);
    },
    setPicker: function() {
      this.picker = this.year + "-" + ("00" + this.month).slice(-2);
    },
  },
};
</script>

<style>
#navigation-bar {
  user-select: none;
}
</style>
