import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/css/main.css'
import Notifications from 'vue-notification'

Vue.config.productionTip = false

Vue.use(Notifications)

Vue.filter('IDR', function(value) {
    if (typeof value !== "number") {
        return value;
    }
    var formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    });
    return formatter.format(value);
});

new Vue({
    render: h => h(App),
}).$mount('#app')