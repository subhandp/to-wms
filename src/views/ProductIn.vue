<template>
    <div class="bg-white overflow-auto">
       <router-view></router-view>
      <p class="text-xl pb-3 flex items-center">
                        <i class="fas fa-list mr-3"></i> Latest Products In
                    </p>     
                     <router-link :to="{name: 'product-in-create'}" >  <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded">Add Product In</button>  </router-link><br>
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
  name: "ProductIn",
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
    ...mapState([ 'productsIn']),
  },
    methods: {
    ...mapActions(["getProductsIn"]),
    },
    created() {
        this.getProductsIn()
        // const {Product} = this.productsIn
        this.items= this.productsIn.items
        this.columns = this.productsIn.columns

        console.log('items in', this.items)
    }
};
</script>