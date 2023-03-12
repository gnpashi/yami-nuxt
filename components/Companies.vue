<template>
    <div class="companies" id="companies">
        <div class=" is-flex is-flex-wrap-wrap is-align-items-center is-justify-content-center">
            <div class="img" v-for="(image, index) in images" :key="index">
                <nuxt-img format="webp" :src="image.path" style="width:150px" :class="{ hover: image.isActive }" @mouseenter="image.isActive = true" @mouseleave="image.isActive = false" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">

    export default {
  name: 'Companies',
  data() {
    return {
        isActive: false,
        images: [
            {path: "logo1.png", isActive: false},
            {path: "logo2.svg", isActive: false},
            {path: "logo3.png", isActive: false},
            {path: "logo4.png", isActive: false},

        ],

    }
  },
};
</script>

<style scoped>
    .is-flex{
        gap: 1rem;
    }
    .hover {
        transform: scale(1.1);
    }
    img{
        transition: transform 100ms ease;
        width: 50%;
    text-align: center;
    }

</style>