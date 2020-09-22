<template>
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
        'this-month': isThisMonth(dateNum),
      }"
    >
      <span>{{ dateNum }}</span>
      <ScheduleElement :schedules="thisSchedules(dateNum)"></ScheduleElement>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ScheduleElement from "./ScheduleElement.vue";

export default {
  methods: {
    /**
     * カレンダー日付クリック時の処理
     */
    dateClick: function(dateNum) {
      if (Number.isInteger(dateNum)) {
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
     * 今月の日付かどうかの判定
     * 文字か数字かで判定
     */
    isThisMonth: function(dateNum) {
      return Number.isInteger(dateNum);
    },
    /**
     * 引数で受け取った日の予定リストを返す
     * 年、月は現在選択しているページ
     * 日は引数
     */
    thisSchedules: function(dateNum) {
      const date =
        this.year +
        "-" +
        ("00" + this.month).slice(-2) +
        "-" +
        ("00" + dateNum).slice(-2);
      let thisSchedules = [];
      for (var i = 0; i < this.schedules.length; i++) {
        if (this.schedules[i].date === date) {
          thisSchedules.push(this.schedules[i]);
        }
      }
      return thisSchedules;
    },
  },
  computed: {
    ...mapGetters(["year", "month", "today", "date", "weekdays", "schedules"]),
    calData: function() {
      let calData = [];
      // 初日の曜日を取得
      const firstWeekDay = new Date(this.year, this.month - 1, 1).getDay();
      // 月の日数
      const lastDay = new Date(this.year, this.month, 0).getDate();
      // 日数カウント用
      let dateNum = 1;
      const lastMonth = this.month === 1 ? 12 : this.month - 1;
      const nextMonth = this.month === 12 ? 1 : this.month + 1;
      let date = 0;

      // 週ごとのデータを作成して、calDateにpush
      // 日曜～土曜の日付データを配列で作成
      for (let i = 0; i <= 41; i++) {
        if (i < firstWeekDay) {
          // 先月の日付データ取得
          date = i - firstWeekDay + 1;
          if (i === 0) {
            calData[i] =
              lastMonth + "/" + new Date(this.year, lastMonth, date).getDate();
          } else {
            calData[i] = String(new Date(this.year, lastMonth, date).getDate());
          }
        } else if (lastDay < dateNum) {
          // 来月の日付データ
          date = dateNum - lastDay;
          if (date === 1) {
            calData[i] =
              nextMonth + "/" + new Date(this.year, nextMonth, date).getDate();
          } else {
            calData[i] = String(new Date(this.year, nextMonth, date).getDate());
          }
          dateNum++;
        } else {
          // 通常の日付入力
          calData[i] = dateNum;
          dateNum++;
        }
      }
      return calData;
    },
  },
  components: {
    ScheduleElement,
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
  padding: 0;
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;
}
.cal-date span {
  display: inline-block;
  width: 2em;
  line-height: 2em;
  color: #aaa;
}
.this-month span {
  color: #000;
}
.cal-today span {
  border-radius: 50%;
  background-color: #00838f;
  color: #fff;
}
</style>
