<template>
    <div class="ps-section__content">
        <div class="ps-carousel--nav owl-slider" data-owl-auto="false" data-owl-loop="false" data-owl-speed="10000" data-owl-gap="30" data-owl-nav="true" data-owl-dots="true" data-owl-item="7" data-owl-item-xs="2" data-owl-item-sm="3" data-owl-item-md="4" data-owl-item-lg="5" data-owl-item-xl="6" data-owl-duration="1000" data-owl-mousedrag="on">
            <div class="ps-product ps-product--inner" v-for="(product, index) in products" :key="product.id">
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
            <!-- <div class="ps-product ps-product--inner">
                <div class="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home/2.jpg" alt=""></a>
                    <div class="ps-product__badge out-stock">Out Of Stock</div>
                    <ul class="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i class="icon-bag2"></i></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i class="icon-eye"></i></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i class="icon-heart"></i></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i class="icon-chart-bars"></i></a></li>
                    </ul>
                </div>
                <div class="ps-product__container">
                    <p class="ps-product__price">$101.99<small>18% off</small></p>
                    <div class="ps-product__content"><a class="ps-product__title" href="product-default.html">Aroma Rice Cooker</a>
                        <div class="ps-product__rating">
                            <select class="ps-rating" data-read-only="true">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="2">5</option>
                            </select><span>01</span>
                        </div>
                        <div class="ps-product__progress-bar ps-progress" data-value="5">
                            <div class="ps-progress__value"><span></span></div>
                            <p>Sold:10</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ps-product ps-product--inner">
                <div class="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home/3.jpg" alt=""></a>
                    <div class="ps-product__badge">-25%</div>
                    <ul class="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i class="icon-bag2"></i></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i class="icon-eye"></i></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i class="icon-heart"></i></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i class="icon-chart-bars"></i></a></li>
                    </ul>
                </div>
                <div class="ps-product__container">
                    <p class="ps-product__price sale">$42.00 <del>$60.00 </del><small>18% off</small></p>
                    <div class="ps-product__content"><a class="ps-product__title" href="product-default.html">Simple Plastice Chair In White Color</a>
                        <div class="ps-product__rating">
                            <select class="ps-rating" data-read-only="true">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="2">5</option>
                            </select><span>02</span>
                        </div>
                        <div class="ps-product__progress-bar ps-progress" data-value="96">
                            <div class="ps-progress__value"><span></span></div>
                            <p>Sold:45</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ps-product ps-product--inner">
                <div class="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home/4.jpg" alt=""></a>
                    <div class="ps-product__badge out-stock">Out Of Stock</div>
                    <ul class="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i class="icon-bag2"></i></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i class="icon-eye"></i></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i class="icon-heart"></i></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i class="icon-chart-bars"></i></a></li>
                    </ul>
                </div>
                <div class="ps-product__container">
                    <p class="ps-product__price">$320.00<small>18% off</small></p>
                    <div class="ps-product__content"><a class="ps-product__title" href="product-default.html">Korea Fabric Chair In Brown Colorr</a>
                        <div class="ps-product__rating">
                            <select class="ps-rating" data-read-only="true">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="2">5</option>
                            </select><span>01</span>
                        </div>
                        <div class="ps-product__progress-bar ps-progress" data-value="56">
                            <div class="ps-progress__value"><span></span></div>
                            <p>Sold:31</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ps-product ps-product--inner">
                <div class="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home/5.jpg" alt=""></a>
                    <div class="ps-product__badge out-stock">Out Of Stock</div>
                    <ul class="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i class="icon-bag2"></i></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i class="icon-eye"></i></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i class="icon-heart"></i></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i class="icon-chart-bars"></i></a></li>
                    </ul>
                </div>
                <div class="ps-product__container">
                    <p class="ps-product__price">$85.00<small>18% off</small></p>
                    <div class="ps-product__content"><a class="ps-product__title" href="product-default.html">Set 14-Piece Knife From KichiKit</a>
                        <div class="ps-product__rating">
                            <select class="ps-rating" data-read-only="true">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="2">5</option>
                            </select><span>01</span>
                        </div>
                        <div class="ps-product__progress-bar ps-progress" data-value="4">
                            <div class="ps-progress__value"><span></span></div>
                            <p>Sold:34</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ps-product ps-product--inner">
                <div class="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home/6.jpg" alt=""></a>
                    <div class="ps-product__badge out-stock">Out Of Stock</div>
                    <ul class="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i class="icon-bag2"></i></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i class="icon-eye"></i></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i class="icon-heart"></i></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i class="icon-chart-bars"></i></a></li>
                    </ul>
                </div>
                <div class="ps-product__container">
                    <p class="ps-product__price">$92.00<small>18% off</small></p>
                    <div class="ps-product__content"><a class="ps-product__title" href="product-default.html">Magic Bullet NutriBullet Pro 900 Series Blender</a>
                        <div class="ps-product__rating">
                            <select class="ps-rating" data-read-only="true">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="2">5</option>
                            </select><span>01</span>
                        </div>
                        <div class="ps-product__progress-bar ps-progress" data-value="47">
                            <div class="ps-progress__value"><span></span></div>
                            <p>Sold:62</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ps-product ps-product--inner">
                <div class="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/home/7.jpg" alt=""></a>
                    <div class="ps-product__badge">-46%</div>
                    <ul class="ps-product__actions">
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i class="icon-bag2"></i></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i class="icon-eye"></i></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i class="icon-heart"></i></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i class="icon-chart-bars"></i></a></li>
                    </ul>
                </div>
                <div class="ps-product__container">
                    <p class="ps-product__price sale">$42.00 <del>$60.00 </del><small>18% off</small></p>
                    <div class="ps-product__content"><a class="ps-product__title" href="product-default.html">Letter Printed Cushion Cover Cotton</a>
                        <div class="ps-product__rating">
                            <select class="ps-rating" data-read-only="true">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="2">5</option>
                            </select><span>02</span>
                        </div>
                        <div class="ps-product__progress-bar ps-progress" data-value="26">
                            <div class="ps-progress__value"><span></span></div>
                            <p>Sold:7</p>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
    export default {
        data(){
          return {
            products: [
            // {
            //     'id' : 1, 
            //     'description': 'xyz',
            //     'created_at': '10/10/10'
            // }
            ]
          }
        },
        methods: {
            addThought(thought){ //ejecuta el metodo, recibe el parametro y lo agrega al array thoughts
              this.thoughts.push(thought)
            },
            deleteThought(index){
              this.thoughts.splice(index, 1);
            },
            saveThought(index, thought){
              this.thoughts[index] = thought;
            },
            addToCar(id){
                console.log('agregado al carrito'+id);
            }
        },
        mounted() {
            //console.log('Component mounted.')
            axios.get('/products').then(response => {
              this.products = response.data;
              console.log(this.products);
            });
        }
    }
</script>
