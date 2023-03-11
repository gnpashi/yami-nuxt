<template>
    <div class="clients content" id="clients">
        <div class="client-first has-background-pink has-text-white p-2 py-4">
            <div class="client-text">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla officia delectus natus fuga. Vero veniam aperiam blanditiis, quam cupiditate voluptatibus mollitia molestiae modi velit dolores, facilis aspernatur nam. Similique, iste!</p>
                <cite class="my-2">לורם איפסום</cite>
            </div>
            <div class="client-img">
                <img class="p-2" src="http://via.placeholder.com/640x360" alt="">
            </div> 
        </div>
        <div class="client-second has-background-link-dark has-text-white p-2 py-4">
            <div class="client-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ullam deleniti doloribus id! Labore iste eos repudiandae exercitationem hic accusantium voluptatem nostrum a quibusdam animi!</p>
                <cite class="my-2">לורם 2</cite>
            </div> 
            <div class="client-img">
                <img class="p-2" src="http://via.placeholder.com/640x360" alt="">
            </div> 
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'Clients',

    created() {
        console.log('Clients created')
    },
})
</script>
<style scoped>
    .has-background-pink{
        background-color:hsla(284, 59%, 64%, 1)
;
    }
</style>