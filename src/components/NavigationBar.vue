<template>
  <div id="nav-bar">
    <!-- カレンダーヘッダ -->
    <div class="cal-header">
      <span class="btn navigation">🍔</span>
      <span class="btn header-arrow" @click="setLastMonth">＜</span>
      <span class="btn header-arrow" @click="setNextMonth">＞</span>
      <span class="selected-month">{{ year }} / {{ month }}</span>
      <span class="btn back-today" @click="setCurrentYearAndMonth">today</span>
    </div>
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

<style scoped>
/*---------------------------------------
ヘッダのcss
---------------------------------------*/
#nav-bar {
  height: 50px;
  background-color: skyblue;
  cursor: default;
  user-select: none;
}
span {
  font-size: 24px;
  margin: 11px 10px;
  padding: 0;
  color: white;
  display: inline-block;
  line-height: 24px;
}
.navigation {
  width: 24px;
  float: left;
}
.selected-month {
  width: 110px;
}
.back-today {
  float: right;
}
.btn {
  font-size: 18px;
  margin: 9px;
  padding: 3px;
  border: 1px solid;
  border-radius: 20%;
}
</style>
