<template>
  <div class="card">
        <div class="card-content">
            <div class="content">
            <p>
                <img :src="product.img_url" alt="">
            </p>
            <p><strong>שם:</strong> {{ product.name }}</p>
            <p><strong>מותג:</strong> {{ product.brand }}</p>
            <p><strong>גיל:</strong> {{ product.age }}</p>
            <p><strong>מחיר:</strong> {{ product.price }}</p>
            <p><strong>תיאור:</strong> {{ product.description }}</p>
            <div v-if="currentUser.email == 'guynatan@gmail.com' || currentUser.email == 'gilnatan5@gmail.com'" >
                <!-- <button @click="editProduct" class="button is-success">
                edit
                </button> -->
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
            required: true}
    },
    methods: {
    editProduct(){
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

<style>

</style>