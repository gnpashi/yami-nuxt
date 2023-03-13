

<template>
    <div>
        <div class="notification is-warning py-1">
           <div class=" is-flex is-justify-content-center is-align-items-center ">
               לרכישה <a class="mx-2" href="tel:0525809898">התקשרו 0525809898</a>
           </div>
        </div>
        <nav class="navbar has-background-link-dark px-3" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <h1 class="title is-flex is-align-items-center is-justify-content-center">
                <NuxtLink to="/" class="has-text-white">יאמי!</NuxtLink>
            </h1>
            <a  @click="isOpen = !isOpen" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>
    
            <div :class="{ 'open': isOpen }" id="navbar" class="navbar-menu has-background-link-dark">
                <div class="navbar-start">
                
                </div>
                
                <div class="navbar-end ">
                    <NuxtLink to="/#clients" class="navbar-item">לקוחות מספרים</NuxtLink>
                    <NuxtLink to="/#companies" class="navbar-item">חברות</NuxtLink>
                    <NuxtLink to="/products" class="navbar-item">למוצרים</NuxtLink>
                </div>
            </div>
        </nav>

    </div>
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

<style scoped> 
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

    .title{
        margin-bottom: 0!important;
    }
    .navbar-end{
        margin-left: 0;
    }
    .notification{
        margin-bottom: 0;
    }
    @media screen and (min-width: 768px) {
        .navbar{
            padding: 0 10rem!important;
        }
    }
</style>