<template>
  <div id="cal-main">
    <div class="cal-grid">
      <div class="weekdays" v-for="dayname in weekdays" :key="dayname">
        <span>{{ dayname }}</span>
      </div>
      <div
        class="cal-date"
        v-for="(dateNum, index) in calData"
        :key="index"
        @click="dateClick(dateNum)"
        :class="{
          'cal-today': isToday(dateNum),
          active: date === dateNum,
          'has-schedule': hasSchedule(dateNum),
        }"
      >
        <span>{{ dateNum }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    /**
     * カレンダー日付クリック時の処理
     */
    dateClick: function(dateNum) {
      if (dateNum !== "") {
        this.$store.dispatch("setDate", dateNum);
        this.$store.dispatch("toggleAddSchedule");
      }
    },
    /**
     * 今日かどうかの判定
     * 年、月は現在選択しているページ
     * 日は引数
     */
    isToday: function(dateNum) {
      const date =
        this.year +
        "-" +
        ("00" + this.month).slice(-2) +
        "-" +
        ("00" + dateNum).slice(-2);
      if (this.today === date) {
        return true;
      }
      return false;
    },
    /**
     * 予定が登録されているかどうかの判定
     * 年、月は現在選択しているページ
     * 日は引数
     */
    hasSchedule: function(dateNum) {
      const date =
        this.year +
        "-" +
        ("00" + this.month).slice(-2) +
        "-" +
        ("00" + dateNum).slice(-2);
      for (var i = 0; i < this.schedules.length; i++) {
        if (this.schedules[i].date === date) {
          return true;
        }
      }
      return false;
    },
  },
  computed: {
    ...mapGetters(["year", "month", "today", "date", "weekdays", "schedules"]),
    calData: function() {
      var calData = [];
      // 初日の曜日を取得
      var firstWeekDay = new Date(this.year, this.month - 1, 1).getDay();
      // 月の日数
      var lastDay = new Date(this.year, this.month, 0).getDate();
      // 日数カウント用
      var dateNum = 1;

      // 週ごとのデータを作成して、calDateにpush
      // 日曜～土曜の日付データを配列で作成
      for (var i = 0; i <= 41; i++) {
        if (i < firstWeekDay) {
          // 初週の1日以前の曜日は空文字
          calData[i] = "";
        } else if (lastDay < dateNum) {
          // 最終日以降の曜日は空文字
          calData[i] = "";
        } else {
          // 通常の日付入力
          calData[i] = dateNum;
          dateNum++;
        }
      }
      return calData;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*---------------------------------------
カレンダーのcss
---------------------------------------*/
.cal-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1em repeat(6, calc((100vh - 1em - 50px) / 6));
  cursor: default;
  user-select: none;
}
.weekdays {
  font-size: 0.8em;
  color: #999;
  border-right: 1px solid #ddd;
}
.cal-date {
  padding: 5px;
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;
}
.cal-date span {
  display: inline-block;
  width: 2em;
  line-height: 2em;
}
.cal-today span {
  border-radius: 50%;
  background-color: #00838f;
  color: #fff;
}
.has-schedule {
  background-color: #00d5e8b5;
}
</style>
