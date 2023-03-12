<template>
  <Product :products="products" :product="product" :currentUser="currentUser" @productDeleted="fetchProducts" />
</template>

<script>
 export default {
  name: 'StoreIndexPage',
  layout: 'default',
  data() {
    return {
      currentUser: {
        email: 'אין משתמש פעיל'
      },
      products: []
    }
  },
  // editProduct(){
  //   console.log('editProduct');
    
  // },
  created() {
    this.fetchProducts()
  },
  methods: {
    async fetchProducts() {
      try {
        const snapshot = await this.$fire.firestore.collection('products').get()
        const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        this.products = products
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    },
  },
  mounted() {
    this.$fire.auth.onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        this.currentUser = user
        console.log('User is signed in:', user.email)
      } else {
        // User is signed out.
        console.log('User is signed out')
      }
    })
  },
  async asyncData({ params, $fire }) {
    try {
      const productId = params.id
      const productRef = $fire.firestore.collection('products').doc(productId)
      const doc = await productRef.get()
      if (!doc.exists) {
        return { product: null }
      } else {
        return { product: doc.data() }
      }
    } catch (error) {
      console.error('Error getting product:', error)
      return { product: null }
    }
  }

  
}

</script>

<style>

</style>