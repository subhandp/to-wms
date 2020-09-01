<template>

                       
    <div class="bg-white overflow-auto">

              <p class="text-xl pb-3 flex items-center">
                        <i class="fas fa-list mr-3"></i> Latest Products
                    </p>     
                <table class="min-w-full bg-white">
                <thead class="bg-gray-800 text-white">
                    <tr>
                        <th class="text-left py-3 px-4 uppercase font-semibold text-sm" v-for="(column, index) in columns" :key="index"> {{column}}</th>
                    </tr>
                </thead>
                <tbody class="text-gray-700" >
                    
                    <tr v-for="(item, index) in items" :key="index">
                          <td  class="w-1/3 text-left py-3 px-4" v-for="(column, indexColumn) in columns" :key="indexColumn">{{item[column]}}</td>
                      </tr>

                </tbody>
            </table>

        </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
// import Table from '@/components/Table'

export default {
  name: "Product",
  components:{
  //  Table
  },
  data(){
    return{
      items: '',
      columns: ''
    }
  },
     computed: {
    ...mapState([ 'products']),
  },
    methods: {
    ...mapActions(["getProducts"]),
    },
    created() {
        this.getProducts()
        // const {Product} = this.productsIn
        console.log('product',this.products)
        this.items= this.products.items
        this.columns = this.products.columns
        console.log('items out', this.items)
    }
};
</script>