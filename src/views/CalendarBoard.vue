<template>
  <div id="board">
    <CalendarGrid></CalendarGrid>
  </div>
</template>

<script>
import CalendarGrid from "@/components/CalendarGrid";

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
    CalendarGrid,
  },
};
</script>
