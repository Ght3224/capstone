<template>
    <div>
        <div id="app">
            <div id="nav">
                <router-link to="/orders"> Orders</router-link>
            </div>
            <router-view />
        </div>
        <div class="carted_products">
            <h1>{{ message }}</h1>
            <h4>
                <hr>
                <br>
                <br>
                <button v-on:click="makeOrder()">Order!</button>
                </button></h4>
            <h5></h5>
            <div v-for="product in cartedProducts">
                <h3> Quantity: {{product.quantity}} </h3>
                <h2> {{product.price}} </h2>
                <p> Shelf Date: {{Date(product.updated_at)}} </p>
                <div v-if="currentProduct === product">
                    <h3> Item: {{product.item}} </h3>
                </div>
                <button v-on:click="destroyProduct(product)">Delete Item </button>
                <hr>
            </div>
        </div>
    </div>
</template>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
<script>
import axios from "axios";


export default {
    data: function() {
        return {
            message: "This is the cart",
            cartedProducts: [],
            currentProduct: {},
        };
    },
    created: function() {
        axios.get("/api/carted_products").then(response => { this.cartedProducts = response.data; });
    },
    methods: {
        destroyProduct: function(product) {
            axios.delete('api/carted_products/' + product.id).then(response => { console.log(response.data); })
            var index = this.cartedProducts.indexOf(product)
            this.cartedProducts.splice(index, 1);
            this.$router.push(`/carted_products`)
        },
        makeOrder: function() {
            axios.post('/api/orders').then(response => {
                this.$router.push(`/orders/${response.data.id}`);
            })
        }
    }
};
</script>