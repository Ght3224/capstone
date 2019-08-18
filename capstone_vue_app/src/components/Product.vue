<template>
    <div class="col-3">
        <h2>{{product.item}}</h2>
        <h3 v-if="inCart"> Quantity: {{product.quantity}} </h3>
        <h3> {{product.price}} </h3>
        <p> Shelf Date: {{Date(product.updated_at)}} </p>
        <div>
            <span>
                <label v-bind:for="'quantity-product-' + product.id" for>Quantity:</label>
                <input type="number" v-model="quantity" min="1" v-bind:id="'quantity-product-' + product.id" />
            </span>
            <button v-if="!inCart" v-on:click="addToCart">Add To Cart</button>
            <button v-if="inCart" v-on:click="updateQty">Add To Cart</button>
            <button v-if="inCart" v-on:click="destroyProduct">Delete Item </button>
        </div>
        <router-link v-bind:to="`/products/${product.id}`">See show info</router-link>
        <hr>
    </div>
</template>
<script>
// @ is an alias to /src
import axios from "axios"


export default {
    props: ['id', 'product', 'onDelete', 'inCart'],
    data: function() {
        return {
            quantity: 1
        };
    },
    created: function() {
        // if (this.product) return;
        // axios.get(`/api/products/${this.id}`).then(response => {
        //     this.product = response.data;
        // });
    },
    methods: {
        addToCart: function(e) {
            axios.post(`/api/carted_products`, {
                    product_id: this.product.id,
                    quantity: this.quantity,
                    user_id: 2
                })
                .then(response => {
                    this.$router.push('/carted_products');
                })
                .catch(err => {
                    console.warn(err);
                });
        },
        updateQty: function(e) {
            axios.put(`api/carted_products/${product.id}`, { quantity }).then(response => {
                console.log(response.data);
            });
        },
        destroyProduct: function(product) {
            axios.delete(`api/carted_products/${product.id}`).then(response => { console.log(response.data); })
            if (this.onDelete) onDelete(product.id);
        },
    }
};
</script>