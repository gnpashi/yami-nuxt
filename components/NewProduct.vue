<template>
    <div class="container">
        <div v-if="created" class="notification is-primary">
            מוצר נוצר בהצלחה!
        </div>
        
      <h2 class="title is-2">מוצר חדש</h2>
      <form @submit.prevent="onSubmit" class="box">
        <div class="field">
          <label class="label" for="name">שם המוצר:</label>
          <div class="control">
            <input class="input" type="text" id="name" v-model="name">
          </div>
        </div>
        <div class="field">
          <label class="label" for="description">תיאור:</label>
          <div class="control">
            <textarea class="textarea" id="description" v-model="description"></textarea>
          </div>
        </div>
        <div class="field">
          <label class="label" for="price">מחיר:</label>
          <div class="control">
            <input class="input" type="number" id="price" v-model="price">
          </div>
        </div>
        <div class="field">
          <label class="label" for="age">גיל:</label>
          <div class="control">
            <input class="input" type="text" id="age" v-model="age">
          </div>
        </div>
        <div class="field">
          <label class="label" for="brand">מותג:</label>
          <div class="control">
            <input class="input" type="text" id="brand" v-model="brand">
          </div>
        </div>
        <div class="field">
          <label class="label" for="img_url">קישור לתמונה:</label>
          <div class="control">
            <input class="input" type="text" id="img_url" v-model="img_url">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-link" type="submit">יצירת מוצר</button>
          </div>
        </div>
      </form>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        name: '',
        description: '',
        price: 0,
        age:'',
        brand:'',
        img_url:'',
        created: false
      }
    },
    methods: {
      async onSubmit() {
        try {
          const product = {
            name: this.name,
            description: this.description,
            price: this.price,
            age: this.age,
            brand: this.brand,
            img_url: this.img_url,
            createdAt: new Date(),
            updatedAt: new Date(),
          }
          const docRef = await this.$fire.firestore.collection('products').add(product)
          console.log('Product created with ID:', docRef.id)
          this.$emit('productCreated')
          this.$router.push('/store')
          this.name = ''
            this.description = ''
            this.price = ''
            this.age = ''
            this.brand = ''
            this.img_url = ''
            this.created = true

          
        } catch (error) {
          console.error('Error creating product:', error)
        }
      },
    },
  }
  </script>
  