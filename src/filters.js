import Vue from 'vue'

Vue.filter('readmore', function(value, maxlength = 100) {
    if (value.length > maxlength) {
        value = value.slice(0, maxlength)
    }
    return value + '...';
});