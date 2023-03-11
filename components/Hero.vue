<template>
    <div>
        <Navbar />
        <div class="hero">
            <div class="hero-body is-flexis-justify-content-centeris-align-items-centerflex-dire">
                <div class="hero-text ">
                    <h1 class='title is-1 my-6'> 
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
                <div class="hero-img my-6">
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

