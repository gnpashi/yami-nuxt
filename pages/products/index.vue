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
      <label for="search">חיפוש</label>
      <input class="input mb-3" type="text" @input="search" name="search">
<!-- 
      <div>
        <label for="brandFilter">מותג</label>
        <select class="select" id="brandFilter" ref="brandFilter" @change="filterProducts">
          <option value="all">All</option>
          <option  v-for="brand in brands" :key="brand" :value="brand">{{brand}}</option>

        </select>
      </div>
      <div>
        <label for="ageFilter">גיל</label>
        <select class="select" id="ageFilter" ref="ageFilter" @change="filterProducts">
          <option value="all">All</option>
          <option  v-for="age in ages" :key="age" :value="age">{{age}}</option>
        </select>
      </div> -->
  <div class="is-flex ">
    <div class="is-flex is-flex-direction-column	" v-for="filter in filters" :key="filter.id">
      <label :for="filter.id">{{ filter.label }}</label>
      <div class="select">
        <select class="select" :id="filter.id" :ref="filter.id" v-model="filter.value" @change="filterProducts">
          <option value="all">הכל</option>
          <option v-for="value in filter.values" :key="value" :value="value">{{ value }}</option>
        </select>
      </div>
    </div>
  </div>
      <div class="columns is-multiline">
        <div class="column is-4" v-for="product in filteredProducts" :key="product.id">
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
      products: [],
      filteredProducts: [],
      filterBrand: 'all',
      filterAge: 'all',
      filters: {
        brands:{
          id: 'brandFilter',
          label: 'מותג',
          values: [],
          value: 'all'
        },
        ages:{
          id: 'ageFilter',
          label: 'גיל',
          values: [],
          value: 'all'
        },
      },
      brandFilter: 'all',
      ageFilter: 'all',
    }
  },
  created() {
    this.fetchProducts()
  },
  methods: {
    async fetchProducts() {
      try {
        const snapshot = await this.$fire.firestore.collection('products').get()
        const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        this.products = products
        this.filteredProducts = products // Update filteredProducts when products change
        this.filters.brands.values = [...new Set(products.map(product => product.brand))]
        this.filters.ages.values = [...new Set(products.map(product => product.age))]
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    },
    search(event){
  const searchTerm = event.target.value.toLowerCase()
  // const brandFilter = this.$refs.brandFilter.value
  // const ageFilter = this.$refs.ageFilter.value
      console.log(this.filterBrand);
  this.filteredProducts = this.products.filter(product => {
      const matchesSearchTerm = (
      (product.name && product.name.toLowerCase().includes(searchTerm)) ||
      (product.description && product.description.toLowerCase().includes(searchTerm)) ||
      (product.price && product.price.toLowerCase().includes(searchTerm)) ||
      (product.allergies && product.allergies.toLowerCase().includes(searchTerm)) ||
      (product.brand && product.brand.toLowerCase().includes(searchTerm)) ||
      (product.age && product.age.toLowerCase().includes(searchTerm))
      )
      return matchesSearchTerm
    // const matchesBrandFilter = (brandFilter === 'all' || product.brand === brandFilter)
  //  const matchesAgeFilter = (ageFilter === 'all' || product.age === ageFilter)

    // return matchesSearchTerm && matchesBrandFilter && matchesAgeFilter
  })
  },
  // filterProducts(event){
  //   const brandFilter = event.target.value
  //   this.filteredProducts = this.products.filter(product => {
  //     const matchesBrandFilter = (brandFilter === 'all' || product.brand === brandFilter)
  //     const matchesBrandFilter = (brandFilter === 'all' || product.brand === brandFilter)
  //     return matchesBrandFilter
  //   })

  // }
  filterProducts(event) {
    this.filteredProducts = this.products.filter(product => {
      const matchesBrandFilter = ( this.filters.brands.value === 'all' || product.brand ===  this.filters.brands.value)
      const matchesAgeFilter = ( this.filters.ages.value === 'all' || product.age ===  this.filters.ages.value)

      return matchesBrandFilter && matchesAgeFilter
    })
    console.log(this.brandFilter);
  }
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
    return { products }
  }
}
</script>


<style>
  .is-flex{
    column-gap: 1rem
  }
</style>