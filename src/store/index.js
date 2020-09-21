import Vue from "vue";
import Vuex from "vuex";
import calendar from "./modules/calendar";
import status from "./modules/status";
import schedule from "./modules/schedule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    calendar,
    status,
    schedule,
  },
});
