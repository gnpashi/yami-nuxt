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
      {
        rel: 'stylesheet',
        type:"text/css",
        href: 'https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true
      },
      {
        href: 'https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"',
        rel: 'stylesheet'
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
  *{
    font-family: 'Varela Round', sans-serif !important;
  }
</style>