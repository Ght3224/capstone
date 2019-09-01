<template>
    <div>
        <div id="app">
            <div id="nav">
                <!-- <router-link to="/orders"> Orders</router-link> -->
            </div> <!-- <router-view /> -->
        </div>
        <div class="carted_products">
            <h1>{{ message }}</h1>
            <hr>
            <div class="input-group">
                <label for="inputName">Name</label>
                <input type="text" class="form-control" id="inputName" v-model="name" placeholder="Name">
            </div>
            <div class="input-group">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control" id="inputAddress" v-model="address" placeholder="1234 Main St">
            </div>
            <div class="row">
                <div class="input-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" class="form-control" id="inputCity" v-model="city">
                </div>
                <div class="input-group col-md-4">
                    <label for="inputState">State</label>
                    <input type="text" class="form-control" id="inputState" v-model="state">
                </div>
                <div class="input-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control" id="inputZip" v-model="zip">
                </div>
            </div>
            <div class="input-group">
                <label for="inputPhone">Phone</label>
                <input type="tel" class="form-control" id="inputPhone" placeholder="(555) 555-5555" v-model="phone">
            </div>
            <h1><button type="submit" class="btn btn-primary" v-on:click="makeOrder()">Place Order</button></h1>
            <br><br><br>
            <!-- <div v-for="product in Products">
               <!- <div v-if="currentProduct === product"> -->
            <!-- <h6> Item: {{product.item}} </h6> -->
            <!-- </div> -->
            <!--  </div> -->
            <div v-for="product in cartedProducts">
                <h2> ProductId: {{product.product_id}} </h2>
                <h3> Quantity: {{product.quantity}} </h3>
                <h2> {{product.price}} </h2>
                <p> Shelf Date: {{Date(product.updated_at)}} </p>
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
            Products: [],
            name: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            phone: ''
        };
    },
    created: function() {
        axios.get("/api/carted_products").then(response => { this.cartedProducts = response.data; });
        axios.get("/api/products").then(response => { this.Products = response.data; });


    },
    methods: {
        destroyProduct: function(product) {
            axios.delete('api/carted_products/' + product.id).then(response => { console.log(response.data); })
            var index = this.cartedProducts.indexOf(product)
            this.cartedProducts.splice(index, 1);
            this.$router.push(`/carted_products`)
        },
        makeOrder: function() {
            const { name, address, city, state, zip, phone } = this;
            let orderParams = { name, address, city, state, zip, phone };
            axios.post('/api/orders', orderParams).then(response => {
                this.$router.push(`/orders/${response.data.id}`);
            })
        }
    }
};
</script>