import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state = {
  sidebarShow: "responsive",
  sidebarMinimize: false,
};

/* eslint-disable*/
const mutations = {
  toggleSidebarDesktop(state: any) {
    const sidebarOpened = [true, "responsive"].includes(state.sidebarShow);
    state.sidebarShow = sidebarOpened ? false : "responsive";
  },
  toggleSidebarMobile(state: any) {
    const sidebarClosed = [false, "responsive"].includes(state.sidebarShow);
    state.sidebarShow = sidebarClosed ? true : "responsive";
  },
  set(state: any, [variable, value]: any[]) {
    state[variable] = value;
  }
};
/* eslint-enable*/

export default new Vuex.Store({
  strict: true,
  state,
  mutations,
});
