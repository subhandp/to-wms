import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/css/main.css'

import VueRouter from "vue-router";
// import routes from "./routes";

Vue.use(VueRouter);
Vue.config.productionTip = false



new Vue({
    render: h => h(App),
}).$mount('#app')