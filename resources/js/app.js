
require('./bootstrap');

window.Vue = require('vue');

import store from "./store"
//import { mapState } from "vuex";

Vue.component('mythoughts-component', require('./components/MyThoughtsComponent.vue').default);
Vue.component('form-component', require('./components/FormComponent.vue').default);
Vue.component('thought-component', require('./components/ThoughtComponent.vue').default);
Vue.component('product-container', require('./components/ProductContainer.vue').default);
Vue.component('car-container', require('./components/CarContainer.vue').default);
Vue.component('product-sorter', require('./components/ProductSorter.vue').default);

const app = new Vue({
    el: '#app',
    store,
    data(){
        return {
            //num: 8
        }
    },
    // computed: {
    //     ...mapState(['shoppingCar'])
    // },
    // mounted(){
    //     console.log(this.$refs.totalProducts);
    //     console.log('montado car cont');
    // }
});
