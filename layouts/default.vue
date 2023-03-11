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
        link: [
          {
            rel: 'stylesheet',
            type:"text/css",
            href: 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css'
          }
        ]
       }
  }
})
</script>

<style scoped>
  html{
    scroll-behavior: smooth;
  }
</style>