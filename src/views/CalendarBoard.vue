<template>
  <div>
    <!-- 曜日の表示 -->
    <div
      role="weekdays"
      v-for="(dayname, index) in this.$store.getters.weekdays"
      :key="index"
    >
      {{ dayname }}
    </div>
    <CalendarElement></CalendarElement>
  </div>
</template>

<script>
import CalendarElement from "@/components/CalendarElement";

export default {
  computed: {},
  created() {
    var date = new Date();
    var y = date.getFullYear();
    var m = ("0" + (date.getMonth() + 1)).slice(-2);
    var d = ("0" + date.getDate()).slice(-2);

    // yearとmonthを設定
    this.$store.dispatch("setYear", Number(y));
    this.$store.dispatch("setMonth", Number(m));

    // 今日の日付を設定
    this.$store.dispatch("setToday", y + "-" + m + "-" + d);
  },
  components: {
    CalendarElement,
  },
};
</script>

<style>
div[role="weekdays"] {
  width: 14.285%;
  /* float: left; */
  display: inline-block;
  font-size: 0.9em;
  color: #999;
}
</style>
