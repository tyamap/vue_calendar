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
};
const actions = {
  addSchedule({ commit }, schedule) {
    commit("addSchedule", schedule);
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
