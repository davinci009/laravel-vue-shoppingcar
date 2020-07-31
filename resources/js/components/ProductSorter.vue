<template>
    <div class="ps-shopping__actions d-none d-lg-block d-lx-block">
        <select @change="sort($event)" v-model="selected" ref="mySelect">
        <option disabled value="">Seleccione un elemento</option>
            <option v-for="(option, index) in options" 
                    :key="index" :value="option.value">{{option.key}}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                selected: '',
                options: [
                    {value: "latest", key: "Sort by latest"},
                    {value: "popularity", key: "Sort by popularity"},
                    {value: "rating", key: "Sort by average rating"},
                    {value: "price_asc", key: "Sort by price: low to high"},
                    {value: "price_desc", key: "Sort by price: high to low"},
                ],
            }
        },
        methods: {
            onchange (){
                console.log('event')
            },
            sort(event){
                this.$store.dispatch('productsIndex/sortItem', event.target.value)
                //if (event.target.value == 'price_desc'){ }
            }
        },
        mounted (){
            //this.$refs.mySelect.className += 'order_by ps-select'
        }
        
    }
</script>
