const state = {
    cars: [
        //{'id': 100, 'title': 'camisa manga larga XL', 'cant': 5, 'seller': 'shop52', 'price': 250, 'img': 'img/products/clothing/7.jpg'},
        //{'id': 200, 'title': 'mesa para computadoras', 'cant': 20, 'seller': 'shop52', 'price': 845, 'img': 'img/products/clothing/7.jpg'},
        //{'id': 300, 'title': 'HORNO TOSTADOR', 'cant': 5, 'seller': 'JOSE BORGES', 'price': 1, 'img': 'img/products/clothing/7.jpg'},
    ],
};

const getters = {
    carState (state){
        if (state.cars.length === 0) return 'el carro esta vacio';
    },
    // carLength (state){
    //     return state.cars.length;
    // }
};

const methods = {};

const actions = {
    getCarContent ( {commit} ) {
        axios.get('/car/get/content')
        .then( response => response.data)
        .then( data => {
            commit('setCars', data);
        })
    },
    addNewProduct({commit}, data){
        commit('addnew', data)
    },
    deleteOneCar: async function ({commit}, id) {
        const result = await axios.delete(`/car/${id}/delete`);
        const data =  await result.data;
        commit('deleteItemCar', data);
        console.log(data);
    },
};

const mutations = {
    setCars(state, data){
        for (var item in data){
            state.cars.push(data[item]);
        }
    },
    addnew(state, data){
        state.cars = [];
        for (var item in data){
            state.cars.push(data[item]);
        }
    },
    deleteItemCar(state, data) {
        state.cars = state.cars.filter((value) => value.id != data);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}