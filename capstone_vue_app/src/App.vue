<template>
    <div id="app">
        <div id="nav">
            <header id="header"></header>
            <router-link to="/">Home</router-link> |
            <router-link to="/carted_products">Shopping Cart</router-link>
        </div>
        <router-view />
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