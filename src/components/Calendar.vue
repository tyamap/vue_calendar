<template>
  <div>
    <!-- カレンダーヘッダ -->
    <div id="cal-header">
      <span class="header-arrow" v-on:touchstart="setLastMonth">＜</span>
      <span class="selected-month">{{ year }} / {{ month }}</span>
      <span class="header-arrow" v-on:touchstart="setNextMonth">＞</span>
    </div>
    <!-- カレンダーメイン -->
    <div>
      <table id="cal-main">
        <!-- 曜日を表示させる（テーブルヘッダ） -->
        <thead>
          <th v-for="(dayname, index) in weekdays" :key="index">
            {{ dayname }}
          </th>
        </thead>
        <!-- 日付を表示させる（テーブルボディ） -->
        <tbody>
          <tr v-for="(weekData, index) in calData" :key="index">
            <td
              class="cal-day"
              v-for="(dayNum, index) in weekData"
              :key="index"
            >
              <span>{{ dayNum }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      year: 2020,
      month: 3,
      day: -1,
      today: "",
    };
  },
  methods: {
    /**
     * 先月のカレンダーを取得
     */
    setLastMonth: function() {
      if (this.month === 1) {
        this.year--;
        this.month = 12;
      } else {
        this.month--;
      }
      this.day = -1;
    },
    /**
     * 翌月のカレンダーを取得
     */
    setNextMonth: function() {
      if (this.month === 12) {
        this.year++;
        this.month = 1;
      } else {
        this.month++;
      }
      this.day = -1;
    },
  },
  computed: {
    calData: function() {
      console.log(this.year + "-" + this.month + "のデータ作成");
      var calData = [];

      // 初日の曜日を取得
      var firstWeekDay = new Date(this.year, this.month - 1, 1).getDay();

      // 月の日数
      var lastDay = new Date(this.year, this.month, 0).getDate();

      // 日数カウント用
      var dayNum = 1;

      // 週ごとのデータを作成して、calDateにpush
      while (dayNum <= lastDay) {
        var weekData = [];

        // 日曜～土曜の日付データを配列で作成
        for (var i = 0; i <= 6; i++) {
          if (calData.length === 0 && i < firstWeekDay) {
            // 初週の1日以前の曜日は空文字
            weekData[i] = "";
          } else if (lastDay < dayNum) {
            // 最終日以降の曜日は空文字
            weekData[i] = "";
          } else {
            // 通常の日付入力
            weekData[i] = dayNum;
            dayNum++;
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
#cal-main th {
  padding: 0;
  text-align: center;
  vertical-align: middle;
  font-weight: normal;
  color: #999;
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
.cal-day.active {
  background-color: #ffc9d7;
}
</style>
