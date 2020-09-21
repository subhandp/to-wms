<template>
  <v-form v-model="valid">
    <v-text-field v-model="product.name" 
                  label="Nama Produk" 
                  :rules="[required('name')]" />
    <v-text-field v-model="product.stock" 
                label="Jumlah Stock" 
                :rules="[required('stock')]"/>
    <v-text-field v-model="product.price" 
                label="Harga" 
                :rules="[required('price')]"/>

    <v-file-input v-model="product.photo" accept="image/*" label="Foto Produk"></v-file-input>
   
    <router-link :to="{ name: 'products'}"><v-btn >Kembali</v-btn></router-link>
    <v-btn @click="saveProduct" :disabled="!valid">{{buttonText}}</v-btn>
  </v-form>
</template>

<script>
  import validations from '@/utils/validations';
  export default {
    data() {
      console.log(validations)
      return {
        valid: false,
        ...validations
      }
    },
    props: ['product', 'saveProduct', 'buttonText']
  }
</script>
