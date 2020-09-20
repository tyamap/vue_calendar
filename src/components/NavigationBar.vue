<template>
  <div id="nav-bar">
    <!-- カレンダーヘッダ -->
    <div class="cal-header">
      <span class="header-arrow" @click="setLastMonth">＜</span>
      <span class="header-arrow" @click="setNextMonth">＞</span>
      <span class="selected-month">{{ year }} / {{ month }}</span>
      <span class="back-today" @click="setCurrentYearAndMonth">today</span>
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
}
span {
  font-size: 24px;
  line-height: 24px;
  color: white;
  display: inline-block;
  margin: 13px 10px;
}
.cal-header {
  cursor: default;
  user-select: none;
}
.selected-month {
  width: 110px;
}
.back-today {
  font-size: 18px;
  margin: 9px;
  padding: 3px;
  border: 1px solid;
  border-radius: 20%;
  float: right;
}
</style>
