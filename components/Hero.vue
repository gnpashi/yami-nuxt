<template>
    <div>
        <div class="hero">
            <div class="hero-body is-flexis-justify-content-centeris-align-items-centerflex-dire">
                <div class="hero-text ">
                    <h1 class='title is-1 my-3'> 
                        יאמי!
                    </h1>
                    <p class="subtitle is-3">
                        אוכל מושלם
                        לחבר המושלם
                    </p>
                    <NuxtLink to="/products" class="button is-link is-large">למוצרים</NuxtLink>
                </div>
                <div class="hero-img my-6">
                    <nuxt-img format="webp" src="/hero-img.png"  />
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
        }
    .subtitle{
        white-space: pre-line;
    }
    @media screen and (min-width: 1024px) {
        .hero{
            padding: 0 10rem!important;
        }
        .hero-body{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
    
</style>

