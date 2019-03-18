import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const Store = new Vuex.Store({
  state: {
    tree: [],
    currentDepth: "1",
    moving: false
  }
});
