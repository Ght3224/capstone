<template>
    <div class="home">
        <div id="demo">
            <!--   <transition-group class="row" appear enter-active-class="tada" leave-active-class="tada"> -->
            <h2>item: {{ product.item }}</h2>
            <!-- <h3> Imnage: {{product.image}} </h3>-->
            <h1> Price: {{ product.price }}</h1>
            <h2> Date when store ordered this item: {{ (new Date('2019-09-02')).toLocaleString()}} </h2>
            <h3> Organic: {{product.organic}} </h3>
            <h2> Producing Farm: {{product.farm}} </h2>
            <router-link to="/">Back To Beginning</router-link>
            <!-- </transition-group> -->
        </div>
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
    methods: {
        revertDate(string) {

            string.setDate(1);
        }
    }
};
</script>