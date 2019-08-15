<template>
    <div class="order">
        <h1>{{ message }}</h1>
        <h4>Total Cost: ${{ price }} </h4>
        <div v-for="product in orderProducts">
            <h3> Item: {{product.item}} </h3>
            <h3> Quantity: {{product.quantity}} </h3>
            <h2> {{product.price}} </h2>
            <p> Shelf Date: {{Date(product.updated_at)}} </p>
        </div>
    </div>
</template>
<script>
import axios from "axios";


export default {
    data: function() {
        return {
            price: 0.0,
            message: "",
            receiptNo: 0,
            orderProducts: [],
        };
    },
    created: function() {
        axios.get(`/api/orders/${this.$route.params.id}`).then(response => {
            this.price = response.data.price;
            this.message = response.data.message;
            this.receiptNo = response.data.ReceiptNo;
            this.orderProducts = response.data.OrderInformation;
        });
    },
    methods: {

    }
};
</script>