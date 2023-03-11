

<template>
    <nav class="navbar has-background-link-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item">
            <h1 class="title">
                יאמי
            </h1>
        </a>

        <a  @click="isOpen = !isOpen" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
    </div>

        <div :class="{ 'open': isOpen }" id="navbar" class="navbar-menu">
            <div class="navbar-start">
            
            </div>

            <div class="navbar-end">
                <a class="navbar-item">
                מוצרים
            </a>

            <a class="navbar-item">
                לקוחות מספרים
            </a>
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