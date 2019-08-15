<template>
    <div class="orders">
        <h1>{{ message }}</h1>
        <div v-for="order in orders">
            <router-link v-bind:to="`/orders/${order.id}/`"> {{order.id}} </router-link>
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