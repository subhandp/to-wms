

export default{
    namespaced: true,
    state: {
        logoutMenuOpen: false,
    },
    actions: {
        openCloseLogoutMenu({ commit}) {
            commit("SET_STATUS_MENU");
        }
    },
    mutations: {
        SET_STATUS_MENU(state) {
            state.logoutMenuOpen = !state.logoutMenuOpen
        }
    }
}