
<template>
  <div>
    welcome 
        <Login />
    </div>
</template>

<script>
// import 'firebaseui'
import Login from '~/components/Login.vue'
export default {
    name: 'LoginPage',
    layout: 'default',
    components: {
        Login
    },
    mounted () {
    this.$fire.auth.onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        console.log('User is signed in:', user.email)
      } else {
        // User is signed out.
        console.log('User is signed out')
      }
    })
  },
}
</script>

<style>

</style>