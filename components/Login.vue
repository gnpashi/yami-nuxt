<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label>Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: ''
      }
    },
    methods: {
      async login() {
        try {
          const userCredential = await this.$fire.auth.signInWithEmailAndPassword(this.email, this.password)
          // User successfully logged in
          console.log(userCredential.user)
        } catch (error) {
          this.error = error.message
        }
      }
    }
  }
  </script>
  