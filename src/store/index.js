import Vue from "vue";
import Vuex from "vuex";

import templateModule from './template';
import productsModule from './products';
import snackbarModule from "./snackbar";
import usersModule from "./users";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products: productsModule,
    template: templateModule,
    snackbar: snackbarModule,
    users: usersModule
  },
  plugins: [createPersistedState()]
});
