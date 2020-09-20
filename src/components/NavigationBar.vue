<template>
  <div>
    <!-- カレンダーヘッダ -->
    <div id="cal-header">
      <span class="header-arrow" v-on:touchstart="setLastMonth">＜</span>
      <span class="selected-month">{{ year }} / {{ month }}</span>
      <span class="header-arrow" v-on:touchstart="setNextMonth">＞</span>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: mapGetters(['year', 'month']),
  methods: mapActions(['setLastMonth', 'setNextMonth'])
}
</script>

<style scoped>
/*---------------------------------------
ヘッダのcss
---------------------------------------*/
#cal-header {
  font-size: 24px;
  padding: 0;
  text-align: center;
  margin-bottom: 10px;
  background-color: skyblue;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
}
#cal-header span {
  padding: 10px 20px;
  color: white;
  display: inline-block;
}
</style>