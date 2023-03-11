<template>
    <div>
      <h2>Login</h2>
      <button @click="loginWithPopup">Login with Popup</button>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        error: null
      }
    },
    methods: {
      async loginWithPopup() {
        console.log("loginWithPopup");
        try {
          const provider = new this.$fireModule.auth.EmailAuthProvider()
          const userCredential = await this.$fire.auth.signInWithPopup(provider)
          console.log(userCredential.user)
        } catch (error) {
          this.error = error.message
        }
      }
    }
  }
  </script>
  