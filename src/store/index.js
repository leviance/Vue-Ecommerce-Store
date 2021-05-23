import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    show_search_bar: false,
    show_form: false,
    shopping_cart: [],
  },
  mutations: {
    add_to_cart(state) {
      state.num_cart++;
    },
  },
  actions: {},
  modules: {},
});
