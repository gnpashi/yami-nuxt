export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'יאמי!',
    htmlAttrs: {
      lang: 'he',
      dir: 'rtl'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'יאמי!' },
      { name: 'format-detection', content: 'telephone=no' },
      {name: "og:title", content: "יאמי!", hid: "og:title"},
      {name: "og:description", content: "אוכל מושלם לחבר המושלם", hid: "og:description"},
      {name: "og:url", content: "https://yamiyami.netlify.app/", hid: "og:url"},
      {name: "og:image", content: "/1200x630.png", hid: "og:image"},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
    ],

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/firebase',
     
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

firebase: 
  {
    config: {
      apiKey: "AIzaSyByQj1iAfN2cFflC2wKjUiikkIXQ90ACyA",
      authDomain: "yami-54628.firebaseapp.com",
      projectId: "yami-54628",
      storageBucket: "yami-54628.appspot.com",
      messagingSenderId: "879039150307",
      appId: "1:879039150307:web:65dc7795222b00621dadd6",
      measurementId: "G-B97WC75SDX"
    },
    services: {
      auth: {
        persistence: 'local', // default
        initialize: {
          onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
          onAuthStateChangedAction: 'onAuthStateChangedAction',
          subscribeManually: false
        }
      },
      firestore: true
      
    },
    ssr: false
  
},
image: {
  domains: ['*']
}
}
