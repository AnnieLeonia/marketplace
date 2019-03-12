import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const Store = new Vuex.Store({
  state: {
    tree: [],
    openModal: false,
    currentOption: null
  }
});
