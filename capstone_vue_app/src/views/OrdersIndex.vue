<template>
    <div class="orders">
        <h1>{{ message }}</h1>
        <transition-group class="row" appear enter-active-class=" animated tada" leave-active-class="animated tada">
            <!-- <div v-for="order in orders" v-bind:key="order.id">
    <router-link v-bind:to="`/orders/${order.id}/`"> {{order.id}} </router-link>
</div> -->
        </transition-group>
    </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    data: function() {
        return {
            message: "Your Order!",
            orders: []
        };
    },
    created: function() {

        axios.get("/api/orders").then(response => {
            this.orders = response.data;
        });
    }
};
</script>