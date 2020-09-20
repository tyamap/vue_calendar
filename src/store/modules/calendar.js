const state = {
  weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  year: 9999,
  month: 1,
  date: -1,
  today: "",
};
const getters = {
  weekdays: state => state.weekdays,
  year: state => state.year,
  month: state => state.month,
  date: state => state.date,
  today: state => state.today,
};
const mutations = {
  setYear(state, year) {
    state.year = year
  },
  setMonth(state, month) {
    state.month = month
  },
  setDate(state, date) {
    state.date = date
  },
  setToday(state, today) {
    state.today = today
  },
  /**
   * 先月のカレンダーを取得
   */
  setLastMonth(state) {
    if (state.month === 1) {
      state.year--;
      state.month = 12;
    } else {
      state.month--;
    }
    state.date = -1;
  },
  /**
   * 翌月のカレンダーを取得
   */
  setNextMonth(state) {
    if (state.month === 12) {
      state.year++;
      state.month = 1;
    } else {
      state.month++;
    }
    state.date = -1;
  },
};
const actions = {
  setYear({ commit }, year) {
    commit("setYear", year)
  },
  setMonth({ commit }, month) {
    commit("setMonth", month)
  },
  setDate({ commit }, date) {
    commit("setDate", date)
  },
  setToday({ commit }, today) {
    commit("setToday", today)
  },
  setLastMonth({ commit }) {
    commit("setLastMonth")
  },
  setNextMonth({ commit }) {
    commit("setNextMonth")
  },
};
export default {
  state,
  getters,
  mutations,
  actions
};