<template>
  <div>
    <!-- カレンダーメイン -->
    <div>
      <table id="cal-main">
        <!-- 日付を表示させる（テーブルボディ） -->
        <tbody>
          <tr v-for="(weekData, index) in calData" :key="index">
            <td
              class="cal-date"
              v-for="(dateNum, index) in weekData"
              :key="index"
              v-on:touchstart="dateClick(dateNum)"
              :class="{ 'cal-today': isToday(dateNum), active: date === dateNum }"
            >
              <span>{{ dateNum }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  methods: {
    /**
     * カレンダー日付クリック時の処理
     */
    dateClick: function(dateNum) {
      if (dateNum !== "") {
        this.$store.dispatch("setDate", dateNum);
      }
    },
    /**
     * 今日かどうかの判定
     * 年、月は現在選択しているページ
     * 日は引数
     */
    isToday: function(d) {
      var date = this.year + "-" + ('00' + this.month).slice(-2) + "-" + d;
      if (this.today === date) {
        return true;
      }
      return false;
    },
  },
  computed: {
    ...mapGetters(["year", "month", "today", "date"]),
    calData: function() {
      var calData = [];

      // 初日の曜日を取得
      var firstWeekDay = new Date(this.year, this.month - 1, 1).getDay();

      // 月の日数
      var lastDay = new Date(this.year, this.month, 0).getDate();

      // 日数カウント用
      var dateNum = 1;

      // 週ごとのデータを作成して、calDateにpush
      while (dateNum <= lastDay) {
        var weekData = [];

        // 日曜～土曜の日付データを配列で作成
        for (var i = 0; i <= 6; i++) {
          if (calData.length === 0 && i < firstWeekDay) {
            // 初週の1日以前の曜日は空文字
            weekData[i] = "";
          } else if (lastDay < dateNum) {
            // 最終日以降の曜日は空文字
            weekData[i] = "";
          } else {
            // 通常の日付入力
            weekData[i] = dateNum;
            dateNum++;
          }
        }
        calData.push(weekData);
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
#cal-main {
  font-size: 14px;
  line-height: 20px;
  table-layout: fixed;
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  border-bottom: 1px solid #ddd;
  border-collapse: collapse;
}
#cal-main td {
  padding: 8px;
  text-align: center;
  vertical-align: middle;
  border-top: 1px solid #ddd;
}
.cal-today {
  background-color: #fcf8e3;
}
.cal-date.active {
  background-color: #ffc9d7;
}
</style>
