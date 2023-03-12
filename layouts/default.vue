<template>
    <div>
      <Navbar />
      <Nuxt />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  head() {
  return {
    title: "יאמי!",
    htmlAttrs: {
      lang: 'he',
      dir: 'rtl'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'אוכל מושלם לחבר המושלם' }
    ],
    link: [
     
    ]
  }
}

})
</script>

<style scoped>
  html{
    scroll-behavior: smooth;
  }
  *{
    font-family: 'Varela Round', sans-serif !important;
  }
</style>