<template>
    <div>
      <div v-if="!signedIn">
        <h2>Login</h2>
        <div ref="firebaseui"></div>
      </div>
      <div v-else>
        <h2>Dashboard</h2>
        <button @click="signOut()">Sign out</button>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        signedIn: false,
      }
    },
    mounted() {
    console.log("mounted")
      const uiConfig = {
        signInSuccessUrl: '/',
        signInOptions: [
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        // Other config options for FirebaseUI
      }
  
      const ui = new firebaseui.auth.AuthUI(firebase.auth())
  
      ui.start(this.$refs.firebaseui, uiConfig)
  
      firebase.auth().onAuthStateChanged((user) => {
        this.signedIn = !!user
      })
    },
    methods: {
      signOut() {
        firebase.auth().signOut()
      },
    },
  }
  </script>