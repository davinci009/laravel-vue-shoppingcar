<template>
<div class="ps-cart--mini"><a class="header__extra" href="#"><i class="icon-bag2"></i><span><i>0</i></span></a>
    <div class="ps-cart__content" v-if="shoppingCar.cars">
        <div class="ps-cart__items">
            <div class="ps-product--cart-mobile" v-for="(car, index) in shoppingCar.cars" :key="car.id">
                <div class="ps-product__thumbnail"><a href="#"><img :src="car.img" alt=""></a></div>
                <div class="ps-product__content">
                    <a class="ps-product__remove" href="#" @click.prevent="deleteProduct(car.id)">
                        <i class="icon-cross"></i>
                    </a>
                    <a href="product-default.html">{{car.title}}</a>
                    <p><strong>Sold by:</strong>{{ car.seller }}</p><small>{{car.cant}} x {{car.price}}</small>
                </div>
            </div>
        </div>
        <div class="ps-cart__footer">
            <h3>Sub Total:<strong>{{totalCar}}</strong></h3>
            <figure>
                <a class="ps-btn" href="shopping-cart.html">View Cart</a>
                <button class="ps-btn" href="checkout.html" id="check" @click="checkOut">Checkout</button>
            </figure>
        </div>
    </div>
</div>
</template>

<script>

//import vuex from "vuex";
import { mapState } from "vuex";

export default {
    data () {
        return {
            // cars: [
            //     {'id': 100, 'title': 'camisa manga larga XL', 'cant': 5, 'seller': 'shop52', 'price': 250, 'img': 'img/products/clothing/7.jpg'},
            //     {'id': 200, 'title': 'mesa para computadoras', 'cant': 20, 'seller': 'shop52', 'price': 845, 'img': 'img/products/clothing/7.jpg'},
            //     {'id': 300, 'title': 'HORNO TOSTADOR', 'cant': 5, 'seller': 'JOSE BORGES', 'price': 1, 'img': 'img/products/clothing/7.jpg'},
            // ],
            total: 0,
        }
    },
    computed: {
        // cars () { return this.$store.state.shoppingCar.cars },
        totalCar () {
            this.total = 0;
            this.shoppingCar.cars.map( (v, i, a) => {
                this.total += v.cant * v.price;
            })

            return this.total;
        },
        ...mapState(['shoppingCar'])
    }, 
    watch: {
        total(newValue, oldValue){

            if (this.total === 0){
                let btn = document.body.querySelector('#check');
                btn.setAttribute("disabled", true);
            } 
        },
    },
    methods: {
        checkOut () {
            alert('ir al checkout');
        },
        deleteProduct: async function (id){
            await this.$store.dispatch('shoppingCar/deleteOneCar', id);
            //console.log('here should delete from session');
        }
    },
    created(){
        this.$store.dispatch('shoppingCar/getCarContent');
        //console.log('compnente montado')
    },
}
</script>