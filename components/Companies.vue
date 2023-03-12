<template>
    <div class="companies" id="companies">
        <div class=" is-flex is-flex-wrap-wrap is-align-items-center is-justify-content-center">
            <div class="img" v-for="(image, index) in images" :key="index">
                <img :src="image.path" loading="lazy" style="width:150px" :class="{ hover: image.isActive }" @mouseenter="image.isActive = true" @mouseleave="image.isActive = false" alt="">
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
            {path: "https://www.cotecnica.es/sites/default/files/logo-cotecnica.png", isActive: false},
            {path: "https://images.logicommerce.cloud/106/main-logo-es.svg", isActive: false},
            {path: "https://www.farmina.com/images/linee/brand-head/_10_nd-ocean@web.png", isActive: false},
            {path: "https://www.farmina.com/images/linee/brand-head/cibau.png", isActive: false},

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