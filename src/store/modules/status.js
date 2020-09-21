const state = {
  addSchedule: false,
};
const getters = {
  addSchedule: (state) => state.addSchedule,
};
const mutations = {
  toggleAddSchedule(state) {
    state.addSchedule = !state.addSchedule;
  },
};
const actions = {
  toggleAddSchedule({ commit }) {
    commit("toggleAddSchedule");
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
