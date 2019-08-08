<template>
  <div class="products-new">
    <h1>{{ message }}</h1>
<form v-on:submit.prevent="makeProduct()">
<p> Item: <input type="text" v-model="newProductItem"></p>
<p> Price: <input type="text" v-model="newProductPrice"></p>
<!-- <button v-on:click="makeProduct()">Make a new Product</button> -->
</form>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios"
export default {
  data: function() {
    return {
      message: "Welcome to ProductsNew",
      newProductItem: '',
      newProductPrice: ''
    };
  },
  created: function() {},
  methods: {
    makeProduct: function() {
      var newProduct = {
        item: this.newProductItem, 
        price: this.newProductPrice
      } // send data to api
      axios.post('/api/products', newProduct).then(response =>
        {console.log("test");
        this.$router.push('/');
      })
    }
  }
};
</script>