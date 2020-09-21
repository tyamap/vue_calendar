const state = {
  schedules: [],
  schedule: {},
};
const getters = {
  schedules: (state) => state.schedules,
  schedule: (state) => state.schedule,
};
const mutations = {
  addSchedule(state, { title, date, location, note }) {
    const schedule = {
      title,
      date,
      location,
      note,
    };
    state.schedules.push(schedule);
  },
  setSchedule(state, schedule) {
    state.schedule = schedule;
  },
};
const actions = {
  addSchedule({ commit }, { title, date, location, note }) {
    commit("addSchedule", { title, date, location, note });
  },
  setSchedule({ commit }, schedule) {
    commit("setSchedule", schedule);
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
