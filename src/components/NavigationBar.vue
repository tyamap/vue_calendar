<template>
  <div id="nav-bar">
    <!-- カレンダーヘッダ -->
    <div class="cal-header">
      <span class="header-arrow" @click="setLastMonth">＜</span>
      <span class="selected-month">{{ year }} / {{ month }}</span>
      <span class="header-arrow" @click="setNextMonth">＞</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters(["year", "month"]),
  methods: mapActions(["setLastMonth", "setNextMonth"]),
};
</script>

<style scoped>
/*---------------------------------------
ヘッダのcss
---------------------------------------*/
.cal-header {
  font-size: 1.5em;
  padding: 0;
  text-align: center;
  background-color: skyblue;
  display: flex;
  justify-content: space-between;
  cursor: default;
  user-select: none;
}
.cal-header span {
  padding: 0.5em 1.5em;
  color: white;
  display: inline-block;
}
</style>
