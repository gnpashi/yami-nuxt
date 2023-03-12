<template>
  <div class="container">
    <div class="section">
      <div class="columns">
        <div class="column">
          <div v-if="currentUser.email == 'guynatan@gmail.com' || currentUser.email == 'gilnatan5@gmail.com'" >
            <h2 class="title">ברוך הבא, {{ currentUser.email }}</h2>
            <NewProduct @productCreated="fetchProducts"/>
          </div>
        </div>
      </div>

      <div class="columns is-multiline">
        <div class="column is-4" v-for="product in products" :key="product.id">
          <Product :products="products" :product="product" :currentUser="currentUser" @productDeleted="fetchProducts"/>
        </div>
      </div>
    </div>
  </div>
</template>
  
  
  <script>
  
  export default {
  name: 'ProductsIndexPage',
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
  async asyncData({ $fire }) {
    const productsRef = $fire.firestore.collection('products')
    const snapshot = await productsRef.get()
    const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    console.log(products);
    return { products }
  },

  
}

    
  </script>
  