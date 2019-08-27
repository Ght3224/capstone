<template>
    <div>
        <div id="nav" class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 class="my-0 mr-md-auto font-weight-normal">QuickServe Fruits</h5>
            <nav class="my-2 my-md-0 mr-md-3">
                <router-link class="p-2 text-dark" to="/">Home</router-link>
                <router-link class="p-2 text-dark" to="/carted_products">Shopping Cart</router-link>
                <router-link to="/login">Login</router-link>
                <router-link to="/logout">Logout</router-link>
                <a href="#"></a>
            </nav>
        </div>
        <div id="app" class="container">
            <router-view />
        </div>
        <footer id="footer">
        </footer>
    </div>
</template>
<style>
/*#app {
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
}*/
body {
    background-color: #21FE90;
}
</style>