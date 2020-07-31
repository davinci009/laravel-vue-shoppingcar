import Vue from "vue";
import Vuex from "vuex";

import shoppingCar from "./modules/shoppingCar"
import productsIndex from "./modules/productsIndex"

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        shoppingCar,
        productsIndex
    }
})