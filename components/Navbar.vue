

<template>
    <nav class="navbar has-background-link-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item">
            <h1 class="title">
                <NuxtLink to="/" class="has-text-white">יאמי!</NuxtLink>
                
            </h1>
        </a>

        <a  @click="isOpen = !isOpen" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
    </div>

        <div :class="{ 'open': isOpen }" id="navbar" class="navbar-menu has-background-link-dark">
            <div class="navbar-start">
            
            </div>
            
            <div class="navbar-end">
                <NuxtLink to="/#clients" class="navbar-item">לקוחות מספרים</NuxtLink>
                <NuxtLink to="/#companies" class="navbar-item">מוצרים</NuxtLink>
                <NuxtLink to="/store" class="navbar-item">להזמנה</NuxtLink>
            </div>
        </div>
    </nav>
</template>

<script>
    export default{
        name: 'Navbar',
        data() {
            return {
            isOpen: false,
            };
        },
        watch: {
        '$route'() {
            this.isOpen = false;
        },
  },

    }
</script>

<style> 
    .navbar-burger{
        margin-right: auto;
        margin-left: 0;
        color: white;
    }
    .open{
        display: block;
    }

    .navbar-item .title,
    .navbar-item{
        color: white;
    }
</style>