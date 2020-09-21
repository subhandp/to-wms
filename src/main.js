import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/css/main.css'
import './filters'

import VueRouter from "vue-router";
import routes from "./routes";

import postsData from '../src/assets/data/posts'

import store from "./store/index";
import vSelect from "vue-select";
import vuetify from './plugins/vuetify';

Vue.component("v-select", vSelect);

Vue.use(VueRouter);
Vue.config.productionTip = false

Vue.mixin({
    methods: {
        paginate(array, page_size, page_number) {
            return array.slice((page_number - 1) * page_size, page_number * page_size);
        },
        getData: function(data, pageSize, pageNumber) {
            pageNumber = pageNumber ? pageNumber : 10
            const PostsDataTotal = data.length
            const listNumberData = Array.from(Array(PostsDataTotal).keys(), n => n + 1)
            const paginate = this.paginate(listNumberData, pageSize, pageNumber);
            return data.slice(paginate[0] - 1, paginate.pop());
        },
        getDataById(data, id) {
            return data.filter((obj) => obj.id == id);
        },
        widgetPopular() {
            return { dataset: postsData, datasetName: 'Posts', routeName: 'postspage' }
        }
    }
});



const router = new VueRouter({
    routes,
    mode: "history",
});

router.beforeEach((to, from, next) => {
    
    if(to.matched.some(record => record.meta.requiresAuth)) {
        
        if (!store.getters['users/isLogIn']) {
            console.log("sdh tdk LOGIN LOH")
            store.dispatch('snackbar/setSnackbar', {color: 'error', text: "Please Login First, before access page."});
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            console.log("MASIH LOGIN LOH")
            next()
        }
    }
    else {
        next()
    }
})




new Vue({
    store,
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')