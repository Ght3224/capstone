<template>
    <div class="home">
        <h1> Produce-for-Sale! </h1>
        <transition-group class="row" appear enter-active-class="animated heartBeat" leave-active-class="animated fadeOut">
            <product v-for="product in products" v-bind:product="product" v-bind:key="product.id"> </product>
        </transition-group>
    </div>
</template>
<script>
// @ is an alias to /src
import axios from "axios"
import Vue2Filters from "vue2-filters";
import Product from '../components/Product.vue';


export default {
    mixins: [Vue2Filters.mixin],
    data: function() {
        return {
            products: [],
            currentProduct: {}
        };
    },
    components: {
        product: Product
    },
    created: function() {

        axios.get("/api/products").then(response => {
            this.products = response.data;
        });
    },
    methods: {
        showProduct: function(product) {
            if (this.currentProduct === product) {
                this.currentProduct = {};
            } else {
                this.currentProduct = product;
            }
        },
        addToCart: function(e) {
            this.$router.push(`/carted_products`)
        }
        // createProduct: function(product) {
        // axios.post('/api/products' + product.id).then(response => { this.products.push(response.data) });
        // }
    }
};
</script>