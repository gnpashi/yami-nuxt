<template>
    <div class="companies">
        <div class=" is-flex is-flex-wrap-wrap is-align-items-center is-justify-content-center">
            <div class="img" v-for="(image, index) in images" :key="index">
                <img :src="image.path" style="width:150px" :class="{ hover: image.isActive }" @mouseenter="image.isActive = true" @mouseleave="image.isActive = false" alt="">
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
            {path: "companies/download1.jpeg", isActive: false},
            {path: "companies/download2.jpeg", isActive: false},
            {path: "companies/download3.jpeg", isActive: false},
            {path: "companies/download4.jpeg", isActive: false},
            {path: "companies/download5.jpeg", isActive: false},
            {path: "companies/download6.jpeg", isActive: false},
            {path: "companies/download7.jpeg", isActive: false},
            {path: "companies/download8.jpeg", isActive: false},

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