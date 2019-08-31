import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ProductsNew from './views/ProductsNew.vue'
import ProductsShow from './views/ProductsShow.vue'
import CartedProductsIndex from './views/CartedProductsIndex.vue'
import OrdersIndex from './views/OrdersIndex.vue'
import OrdersShow from './views/OrdersShow.vue'
// import Login from './views/Login.vue';
// import Signup from "./views/Signup.vue";
// import Logout from './views/Logout.vue';

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/carted_products',
            name: 'carted_products',
            component: CartedProductsIndex
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/products/new',
            name: 'products-new',
            component: ProductsNew
        },
        {
            path: '/products/:id',
            name: 'products-show',
            component: ProductsShow
        },
        {
            path: '/orders',
            name: "orders-index",
            component: OrdersIndex
        },
        {
            path: '/orders/:id',
            name: 'orders-show',
            component: OrdersShow
        },
        // { path: "/signup", name: "signup", component: Signup },
        // { path: "/login", name: "login", component: Login },
        // { path: "/logout", name: "logout", component: Logout }, 
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
        },
        // {
    //     path: '*',
    //     component: NotFoundComponent
    // }
    ]
})