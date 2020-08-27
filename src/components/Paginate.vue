<template>

<div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
  <div class="flex-1 flex justify-between sm:hidden">
    <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
      Previous
    </a>
    <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
      Next
    </a>
  </div>
  <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">

    <div>
      <nav class="relative z-0 inline-flex shadow-sm" >

          <div v-for="page in totalPages" :key="page">
            <!-- <router-link :to="urlData(page)"class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"> {{page}}</router-link>  -->
            <a  :href="urlData(page)" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
            {{page}}
            </a>
          </div>

  
    
      </nav>
    </div>
  </div>
</div>


</template>

<script>
export default {
  name: "Paginate",
  data (){
      return{
          totalPages :  ''
      }
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
    url: {
        type: String,
        required: true
    },
    pageSize: {
        type: Number,
        required: true
    }
  },
  methods:{
      urlData(page){
          return '/'+this.url+'/'+page
      }
  },
  created(){
      console.log('DATAKU',this.url)
      this.totalPages = parseInt(this.data.length / this.pageSize)
  }
};
</script>