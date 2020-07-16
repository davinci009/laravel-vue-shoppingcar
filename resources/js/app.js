
require('./bootstrap');

window.Vue = require('vue');

Vue.component('mythoughts-component', require('./components/MyThoughtsComponent.vue').default);
Vue.component('form-component', require('./components/FormComponent.vue').default);
Vue.component('thought-component', require('./components/ThoughtComponent.vue').default);
Vue.component('product-container', require('./components/ProductContainer.vue').default);

const app = new Vue({
    el: '#app',
});
