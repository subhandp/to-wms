import Api from './api'

export default {
  namespaced: true,
  state: {
    // totalUser: 0,
    users: [],
    currentUser: {},
    token:null,
    totalUsers:0
  },
  mutations: {

    SET_USERS(state, users) {
      state.users = users;
    },
    
    SET_TOTAL_USERS(state, number) {
        state.totalUsers = number;
      },

    LOGOUT_USER(state) {
      state.currentUser = {}
      window.localStorage.clear();
      state.token = null
    },
    SET_CURRENT_USER(state, user) {
      state.currentUser = {user};
      window.localStorage.currentUser = JSON.stringify(user);
    },
    SET_AUTH_TOKEN(state, token) {
        state.token = token;
    },
  },
  actions: {
    async loadAll({commit}) {
      let response = await Api.get('/user');
      let users = response.data.data;
      let totalUser = response.data.data.totalItems;
      commit('SET_TOTAL_USERS', totalUser);
      
      commit('SET_USERS', users);
    },
    async totalUser(){
        let response = await Api.get('/user');
        return response.data.data.totalItem;
    },
    async loadCurrent({commit}) {
      let user = JSON.parse(window.localStorage.currentUser);
      commit('SET_CURRENT_USER', user);
    },

    logout({commit}) {
      commit('LOGOUT_USER');
    },
    async login({commit}, loginInfo) {
      try {
        console.log("TOKEN: ",loginInfo)
        let response = await Api.post('/auth/login', { data: loginInfo });
        if(typeof(response.error) == 'undefined'){
            let {token} = response.data.data;
            commit('SET_CURRENT_USER', response.data.data);
            commit('SET_AUTH_TOKEN', token);
            Api.defaults.headers['Authorization'] = `Bearer ${token}`

            return {"status":"success", "msg": response.data.data.username};
        }
        else{
            return {"status":"error", "msg": response.error};
        }
        
      } catch {
        return {"status":"error", "msg": "Email/password combination was incorrect"}
      }   
    },
    // async register({commit, dispatch}, registrationInfo) {
    //   try {
    //     let response = await Api().post('/users', registrationInfo);
    //     let user = response.data.data.attributes;

    //     commit('SET_CURRENT_USER', user);
    //     dispatch('loadPlayedVideos', user.id);
    //     return user;
    //   } catch {
    //     return { error: "There was an error.  Please try again." }
    //   }
    // },
  },
  getters: {
    currentUser: state => {
        return state.currentUser
    },
    isLogIn: state => {
        Api.defaults.headers['Authorization'] = `Bearer ${state.token}`
      if (state.token) {
        return true
      }

      return false
    }
  }
}