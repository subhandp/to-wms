import Vue from 'vue'
import Vuex from 'vuex'
import Api from './api'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        logoutMenuOpen: false,
        products: {
            items: '',
            columns: ''
        },
        productsIn: {
            items: [],
            columns: ''
        }
    },
    getters: {

    },
    actions: {
        async getProducts({ commit }) {
            try {
                const { data } = await Api.get("product");
                commit("setProductsList", { data });
            } catch (error) {
                console.log({ error: error.message });
            }

        },
        async getProductsIn({ commit }) {
            try {
                const { data } = await Api.get("in");
                commit("setProductsInList", { data });
            } catch (error) {
                console.log({ error: error.message });
            }

        }
    },
    mutations: {
        setProductsList(state, payload) {
            state.products.items = payload.data.data.data;
            state.products.columns = ['name', 'stock', 'price'];
        },
        setProductsInList(state, payload) {
            state.productsIn.items = payload.data.data.data;
            state.productsIn.columns = ['date', 'total'];
        },
        openCloseLogoutMenu(state) {
            state.logoutMenuOpen = !state.logoutMenuOpen
        }
    }
})