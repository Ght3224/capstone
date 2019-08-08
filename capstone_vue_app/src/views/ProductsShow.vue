<template>
  <div class="home">
    <h2>item: {{ product.item }}</h2>
    <h1>Price: {{ product.price }}</h1>
    <h2> Ordered Date: {{ Date(product.created_at) }} </h2>
  </div>
</template>

<style>
</style>

<script>

import axios from "axios"
export default {
  data: function() {
    return {
      message: "Welcome to Show!",
      product: {}
    };
  },
  created: function() {
    // console.log(this.$route.params.id);
    axios.get(`/api/products/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.product = response.data;
    })
  },
  methods: {}
};
</script>