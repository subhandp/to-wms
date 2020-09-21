
import Api from './api'

export default{
    namespaced: true,
    state: {
        products: [],
        totalProducts: 0
    },
    actions: {
        async getAllProducts({ commit}) {
            try {
                const { data } = await Api.get("product");

                commit("SET_PRODUCTS", { data });
                commit("SET_TOTAL_PRODUCTS", data.data.totalItems);


            } catch (error) {
                console.log({ error: error.message });
            }

        },
        async edit({commit}, product) {
            let response = await Api().put(`/product/${product.id}`, product);
            let newProduct = response.data;
            commit('EDIT_PRODUCT', newProduct);
            return newProduct;
          },
        async create({dispatch}, formData) {
            try {
                const { data } = await Api.post('product', formData)
                await dispatch('getAllProducts')
                return data
            } catch ({ response }) {
                throw new Error(response.data.message)
            }
        },
        async update({ dispatch },formData) {
            try {
            
              const { data } = await Api.put('product/' + formData.get('id'), formData)
              await dispatch('getAllProducts')
              return data
            } catch ({ response }) {
                throw new Error(response.data.message)
            }
          },
        async delete({ dispatch }, product) {
            try {
              const { data } = await Api.delete('product/' + product.id)
              await dispatch('getAllProducts')
              return data
            } catch ({ response }) {
                throw new Error(response.data.message)
            }
          }
    },
    mutations: {
        SET_PRODUCTS(state, payload) {
            state.products = payload.data.data.data
        },
        SET_TOTAL_PRODUCTS(state, number) {
            state.totalProducts = number
        },
        EDIT_PRODUCT(state, product) {
            state.products.find(p => p.id == product.id)
          },
    }
}