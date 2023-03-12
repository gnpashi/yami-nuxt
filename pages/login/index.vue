
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
    }
}
</script>

<style>

</style>