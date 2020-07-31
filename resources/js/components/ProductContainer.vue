<template>
    <div class="ps-section__content">
        <div class="ps-carousel--nav owl-slider" data-owl-auto="false" data-owl-loop="false" data-owl-speed="10000" data-owl-gap="30" data-owl-nav="true" data-owl-dots="true" data-owl-item="7" data-owl-item-xs="2" data-owl-item-sm="3" data-owl-item-md="4" data-owl-item-lg="5" data-owl-item-xl="6" data-owl-duration="1000" data-owl-mousedrag="on">
            <div class="ps-product ps-product--inner" v-for="(product, index) in getAllProducts" :key="index">
                <div class="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home/1.jpg" alt=""></a>
                    <div class="ps-product__badge">-16%</div>
                        <ul class="ps-product__actions" style="width: 100%;">
                            <button class="btn btn-danger btn-block" @click="addToCar(product.id)">Comprar</button>
                            
                        </ul>
                </div>
                <div class="ps-product__container">
                    <p class="ps-product__price sale">{{ product.price }} <del v-if="product.price < 1000">$670.00 </del><small>18% off</small></p>
                    <div class="ps-product__content"><a class="ps-product__title" href="product-default.html">{{ product.tittle }}</a>
                        <div class="ps-product__rating">
                            <select class="ps-rating" data-read-only="true">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="2">5</option>
                            </select><span>01</span>
                        </div>
                        <div class="ps-product__progress-bar ps-progress" data-value="35">
                            <div class="ps-progress__value"><span></span></div>
                            <p>Sold:38</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data(){
          return {
            //products: [
            // {
            //     'id' : 1, 
            //     'description': 'xyz',
            //     'created_at': '10/10/10'
            // }
            //]
          }
        },
        computed : {
            getAllProducts (){
                
                return this.$store.getters['productsIndex/getAllProducts']
            }
            
            // cars () {
            //     return this.$store.state.shoppingCar.cars;
            // }
        },
        methods: {
            // addThought(thought){ this.thoughts.push(thought) },
            // deleteThought(index){ this.thoughts.splice(index, 1) },
            // saveThought(index, thought){ this.thoughts[index] = thought },
            
            addToCar(id){
                axios.get(`/car/${id}/add`)
                    .then((response) => response.data)
                    .then( (data) => {
                        console.log(data);
                        this.$store.dispatch('shoppingCar/addNewProduct', data);
                        //this.cars = data;
                    })
            },
        },
        mounted() {
            this.$store.dispatch('productsIndex/loadData');
            
            // axios.get('/products')
            // .then(response => { this.products = response.data })
            // .then(data => {
            //     let totalItem = document.body.querySelector('#totalProducts')
            //     totalItem.innerHTML = this.products.length;
            // })

        }
    }
</script>
