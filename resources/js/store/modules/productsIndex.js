const state = {
    products: [
        //{'id': 100, 'title': 'camisa manga larga XL', 'cant': 5, 'seller': 'shop52', 'price': 250, 'img': 'img/products/clothing/7.jpg'},
        //{'id': 200, 'title': 'mesa para computadoras', 'cant': 20, 'seller': 'shop52', 'price': 845, 'img': 'img/products/clothing/7.jpg'},
        //{'id': 300, 'title': 'HORNO TOSTADOR', 'cant': 5, 'seller': 'JOSE BORGES', 'price': 1, 'img': 'img/products/clothing/7.jpg'},
    ],
    order : '',
};

const getters = {
    getAllProducts (state){ return state.products; },
    descPrice (state){ return state.products.slice().sort((a, b) => a.price - b.price) },
    ascPrice (state){ return state.products.slice().sort((a, b) => b.price - a.price) },
    byName(state){
        var title = [];
        state.products.map((v,i)=> title[i] = v.tittle);

        return title.sort().reduce(function (acum, value, e){
         state.products.map((v,i,a) => { if (value == v.tittle) acum[e] = state.products[i] });
            return acum;
        }, {});
        
    }
    // carState (state){
    //     if (state.cars == []) return 'el carro esta vacio';
    // },
    // carLength (state){
    //     return state.cars.length;
    // }
};

const methods = {};

const actions = {
    loadData({commit, rootState, rootGetters, getters}){
        commit('loadDataM')

        //commit('loading/TOGGLE_LOADING', null, { root: true })
        //console.log(rootGetters["shoppingCar/carState"]);
        //console.log(rootState.shoppingCar.cars);
    },
    sortItem({commit}, payload){
        commit('sortItemM', payload)
    },

    // getCarContent ( {commit} ) {
    //     axios.get('/car/get/content')
    //     .then( response => response.data)
    //     .then( data => commit('setCars', data))
    // },
    // addNewProduct({commit}, data){ commit('addnew', data) },
    // deleteOneCar: async function ({commit}, id) {
    //     const result = await axios.delete(`/car/${id}/delete`);
    //     const data =  await result.data;
    //     commit('deleteItemCar', data);
    //     console.log(data);
    // },
};

const mutations = {
    loadDataM(state){
        axios.get('/products')
            .then(response => { 
                state.products = response.data;
                //console.log(state.products)
            })
            .then(data => {
                let totalItem = document.body.querySelector('#totalProducts')
                totalItem.innerHTML = state.products.length;
            })
    },
    sortItemM(state, payload){
        state.order = payload;
        console.log(payload)
        // let  nArray = state.products;
        // let sortedArray = nArray.sort((a, b) => a.price - b.price)
        // state.products = [];

        /*
           if (payload == 'price_desc'){
                // sortedArray.map((v,i,a) => { state.products.push(v) })
                state.products = state.products.sort((a, b) => a.price - b.price)
            } else if (payload == 'price_asc'){
                state.products = state.products.sort((a, b) => b.price - a.price)
            } else if (payload == 'name'){
                state.products = state.products.sort((a, b) => b.title - a.title)
            }
        */
    }
    // setCars(state, data){ for (var item in data){ state.cars.push(data[item]) }},
    // addnew(state, data){ state.cars = []; for (var item in data){ state.cars.push(data[item]) }},
    // deleteItemCar(state, data) { state.cars = state.cars.filter((value) => value.id != data) }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}