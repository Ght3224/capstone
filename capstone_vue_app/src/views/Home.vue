<template>
    <div class="home">
        <h1> Produce-for-Sale! </h1>
        <transition-group class="row" appear enter-active-class="animated heartBeat" leave-active-class="animated fadeOut">
            <div v-for="product in products" v-bind:key="product.id" class="col-3">
                <!-- <h4> id: {{product.id}} </h4> -->
                <h2>
                    <router-link v-bind:to="`/products/${product.id}/`"> {{product.item}} </router-link>
                </h2>
                <!--make link here-->
                <h2> {{product.price}} </h2>
                <p> Shelf Date: {{Date(product.updated_at)}} </p>
                <!--  <button v-on:click="showProduct(product)">Show when ordered</button> -->
                <router-link v-bind:to="`/products/${product.id}`">See show info</router-link>
                <div v-if="currentProduct === product">
                    <h3> Item: {{product.item}} </h3>
                    <!-- <p>  Ordered Date: {{Date(product.created_at)}} </p> -->
                </div>
                <hr>
            </div>
        </transition-group>
    </div>
</template>
<script>
// @ is an alias to /src
import axios from "axios"


export default {

    data: function() {
        return {
            products: [],
            currentProduct: {}
        };
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
        // createProduct: function(product) {
        // axios.post('/api/products' + product.id).then(response => { this.products.push(response.data) });
        // }

    }
};
</script>