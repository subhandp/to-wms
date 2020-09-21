<template>
  <v-container>
     <h1 class="text-3xl text-black pb-6">Edit Product</h1>
    <ProductEditForm :product="product" :saveProduct="saveProduct" buttonText="Save Product" />
  </v-container>
</template>

<script>
  import { mapState } from 'vuex';
  import ProductEditForm from '@/components/ProductEditForm.vue';

  export default {
    components: {
      ProductEditForm,
    },
    computed: {
      ...mapState({
        products: state => state.products.products
      }),
      product(){
        return this.products.find(p => p.id == this.$route.params.id) || {};
      }
    },
    methods: {
      async saveProduct() {
        
        const formData = new FormData()

        // formData.append('stock', this.product['stock'])
        // formData.append('price', this.product['price'])
        // formData.append('name', this.product['name'])
        // formData.append('id', this.product['id'])
        // formData.append('user_id', 1)



        for (let k in this.product) {
          formData.append(k, this.product[k])
          
        }

        let product = await this.$store.dispatch('products/update', formData);

        this.$store.dispatch('snackbar/setSnackbar', {text: ` successfully Edited product: ${product.data.name}.`});
      },
    },
  }
</script>

