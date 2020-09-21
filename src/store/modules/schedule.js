const state = {
  schedules: [],
};
const getters = {
  schedules: (state) => state.schedules,
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
};
const actions = {
  addSchedule({ commit }, { title, date, location, note }) {
    commit("addSchedule", { title, date, location, note });
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
