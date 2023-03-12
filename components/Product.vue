<template>
  <div class="card">
        <div class="card-content">
            <div class="content">
            <p>
                <img :src="product.img_url" loading="lazy" :class="{productPage: $route.path == `/Products/${product.id}`}" alt="">
            </p>
            <NuxtLink :to="`/Products/${product.id}`">
              <h1 class="title">{{ product.name }}</h1>
            </NuxtLink>


            <p>{{ product.description }}</p>
            <p>{{ product.brand }}</p>
            <p><strong>גיל:</strong> {{ product.age }}</p>
            <p><strong>רגישויות:</strong> {{ product.allergies}}</p>
            <p>{{ product.price }} ₪</p>
            <p>
                <a :href="product.url" target="_blank">לאתר המוצר</a>
            </p>
            <div v-if="currentUser.email == 'guynatan@gmail.com' || currentUser.email == 'gilnatan5@gmail.com'" >
                <button @click="editProduct" class="button is-success">
                edit
                </button>
                <button @click="deleteProduct(product.id)" class="button is-danger">Delete</button>

            </div>
            
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
      required: true
    },
    currentUser: {
      type: Object,
      required: true
    },
    products: {
      type: Array,
            required: true
          },
      
    },
    methods: {
      editProduct(){
      console.log(this.$route.path);
      console.log('editProduct');
      this.name = "name"
    },
    async deleteProduct(productId) {
      console.log(productId );
      try {
        const productsRef = this.$fire.firestore.collection('products')
        await productsRef.doc(productId).delete();
        this.$emit('productDeleted')
        // this.products = this.products.filter((product) => product.id !== productId);
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
    
  },

}
</script>

<style scoped>

  img.productPage{
    max-width: 100%;
  }
  @media screen and (min-width: 1024px) {
    img.productPage{
    max-width: 30%;
  }
    }
    
</style>