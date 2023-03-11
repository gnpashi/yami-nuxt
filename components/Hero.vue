<template>
    <div>
        <Navbar />
        <div class="hero">
            <div class="hero-body is-flex is-justify-content-center is-align-items-center ">
                <div class="hero-text ">
                    <h1 class='title is-1'> 
                        יאמי!
                    </h1>
                    <p class="content is-large">
                        אוכל מושלם
                        לחבר המושלם
                    </p>
                    <button class="button is-link is-large">
                       להזמנה
                    </button>
                </div>
                <div class="hero-img">
                    <img src="hero-img.png" alt="">
                </div>
                
            </div>
        </div>
    </div>

</template>

<script>
    export default{
        name: 'Hero'
    }
</script>

<style>
    .hero-body{
        gap: 5rem;
        height: 100vh;
    }
</style>

