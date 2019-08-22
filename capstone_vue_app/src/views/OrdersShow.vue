<template>
    <div class="order" :style="myStyle" id="template">
        <h1>{{ message }}</h1>
        <transition-group class="row" appear enter-active-class=" animated rubberBand" leave-active-class="animated tada">
            <div v-for="product in orderProducts" v-bind:key="product.id">
                <h1><em> ${{ price }} </em></h1>
                <!-- <h3> Item: {{product.item}} </h3> -->
                <h3> Items: {{product.quantity}} </h3>
                <!-- <p> Shelf Date: {{Date(product.updated_at)}} </p> -->
            </div>
        </transition-group>
    </div>
</template>
<script>
import axios from "axios";


export default {
    data: function() {
        return {
            myStyle: {
                backgroundColor: '#F26356'
            },
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