<template>
  <div class="carted_products">
    <h1>{{ message }}</h1>
    <h4>
      <hr>
      <br>
      <br>
    <button on-click><router-link v-bind:to="`/orders`">Order!</router-link></button></h4>
    <h5></h5>
<!-- </form> -->
  </div>
</template>

<script>
import axios from "axios"
export default {
  data: function() {
    return {
      message: "Welcome to Your Shopping Cart",
      //     axios.get(`/api/products/${this.$route.params.id}`).then(response => {
      // console.log(response.data);
      // this.product = response.data;
    }}
    };
</script>