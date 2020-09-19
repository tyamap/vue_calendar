<template>
  <div>
    <table id="cal-main">
      <!-- 曜日を表示させる（テーブルヘッダ） -->
      <thead>
        <th v-for="(dayname, index) in weekdays" :key="index">{{ dayname }}</th>
      </thead>
      <!-- 日付を表示させる（テーブルボディ） -->
      <tbody>
        <tr v-for="(weekData, index) in calData" :key="index">
          <td class="cal-day" v-for="(dayNum, index) in weekData" :key="index">
            <span>{{ dayNum }}</span>
          </td>
        </tr>
      </tbody>
    </table>
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
  computed: {
    calData: function() {
      console.log(this.year + "-" + this.month + "のデータ作成");
      var calData = [];

      calData[0] = [1, 2, 3, 4, 5, 6, 7];
      calData[1] = [8, 9, 10, 11, 12, 13, 14];
      calData[2] = [15, 16, 17, 18, 19, 20, 21];
      calData[3] = [22, 23, 24, 25, 26, 27, 28];
      calData[4] = [29, 30, 31, "", "", "", ""];

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
