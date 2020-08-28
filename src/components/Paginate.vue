<template>

<div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
  

  <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">

    <div>
      <nav class="relative z-0 inline-flex shadow-sm" >

          <div v-for="page in totalPages" :key="page">
            
            <router-link :to="{ name: url, params: {id: page }}" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">{{page}}</router-link>
           
            <!-- <a  :href="urlData(page)" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"> 
            {{page}}
            </a> -->
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
          resource: this.data,
          totalPages :  parseInt(this.data.length / this.pageSize)
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
  created(){
      console.log('Paginate',this.url)
  },
    watch: {
    $route(to,from) {
    //  const  url = '/'+this.url+'/'+this.$route.params.id
    // this.$router.push(url)
    console.log('to',to)
		console.log('from',from)
    }
  }
};
</script>