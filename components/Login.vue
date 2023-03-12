<template>
    <div>
      <h2>Sign In</h2>
      <form @submit.prevent="signIn">
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <div v-if="error">
          {{ error }}
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: null
      }
    },
    methods: {
      async signIn() {
        try {
          const auth = this.$fire.auth
          await auth.signInWithEmailAndPassword(this.email, this.password)
          // Signed in successfully
          this.$store.commit('ON_AUTH_STATE_CHANGED_MUTATION', auth.currentUser)
          this.$router.push('/dashboard')
        } catch (error) {
          // Handle sign-in errors
          this.error = error.message
        }
      }
    }
  }
  </script>
  