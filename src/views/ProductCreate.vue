<template>
  <v-container>
     <h1 class="text-3xl text-black pb-6">Add Product</h1>
    <ProductEditForm :product="product" :saveProduct="saveProduct" buttonText="Create Product" />
  </v-container>
</template>

<script>
  import ProductEditForm from '@/components/ProductEditForm.vue';

  export default {
    data() {
      return {
        product: {}
      }
    },
    components: {
      ProductEditForm,
    },
    methods: {
      async saveProduct() {
        const formData = new FormData()
        for ( var key in this.product ) {
            formData.append(key, this.product[key]);
        }

        let product = await this.$store.dispatch('products/create', formData);
        let productName = product.data['Nama Product']
        this.$store.dispatch('snackbar/setSnackbar', {text: ` successfully created new product: ${productName}.`});
      },
    },
  }
</script>

