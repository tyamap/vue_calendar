const state = {
  addSchedule: false,
  showSchedule: false,
};
const getters = {
  addSchedule: (state) => state.addSchedule,
  showSchedule: (state) => state.showSchedule,
};
const mutations = {
  toggleAddSchedule(state) {
    state.addSchedule = !state.addSchedule;
  },
  toggleShowSchedule(state) {
    state.showSchedule = !state.showSchedule;
  },
};
const actions = {
  toggleAddSchedule({ commit }) {
    commit("toggleAddSchedule");
  },
  toggleShowSchedule({ commit }) {
    commit("toggleShowSchedule");
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
