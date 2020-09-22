const state = {
  schedules: [],
  schedule: {},
};
const getters = {
  schedules: (state) => state.schedules,
  schedule: (state) => state.schedule,
};
const mutations = {
  addSchedule(state, schedule) {
    state.schedules.push(schedule);
  },
  setSchedule(state, schedule) {
    state.schedule = schedule;
  },
  deleteSchedule(state, schedule) {
    const index = state.schedules.indexOf(schedule);
    if (index > -1) {
      state.schedules.splice(index, 1);
    }
  }
};
const actions = {
  addSchedule({ commit }, schedule) {
    commit("addSchedule", schedule);
  },
  setSchedule({ commit }, schedule) {
    commit("setSchedule", schedule);
  },
  deleteSchedule({ commit }, schedule) {
    commit("deleteSchedule", schedule);
  }
};
export default {
  state,
  getters,
  mutations,
  actions,
};