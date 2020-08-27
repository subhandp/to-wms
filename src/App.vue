<template>
  <div id="app">

		<LayoutHeader></LayoutHeader>
		
		<LayoutNavbar></LayoutNavbar>
	
		<div class="w-full bg-white">
			<div class="text-center px-6 py-12 mb-6 bg-blue-100 border-b">
				<h1 class=" text-xl md:text-4xl pb-4 " >{{title}}</h1>
				<p class="leading-loose text-gray-dark">
					Blog
				</p>
			</div>


			<div class="container max-w-4xl mx-auto md:flex items-start py-8 px-12 md:px-0">
				<div class="w-full md:pr-12 mb-12">
					
					<router-view></router-view>
		
				</div>
		
				<LayoutSidebar></LayoutSidebar>

			</div>
		</div>

  <LayoutFooter></LayoutFooter>
	


  </div>
</template>

<script>

import LayoutFooter from './views/layouts/LayoutFooter'
import LayoutHeader from './views/layouts/LayoutHeader'
import LayoutNavbar from './views/layouts/LayoutNavbar'
import LayoutSidebar from './views/layouts/LayoutSidebar'



export default {
  name: 'App',
  components:{
    LayoutFooter,LayoutHeader,LayoutNavbar,LayoutSidebar
  },
     computed: {
   
        },
        watch: {

        },
        methods: {
        //   setTitle(pageTitle){
        //     this.title = pageTitle
        //   }
        },
         created() {
        },
  data(){
    return{
      title : 'Dashboard'
    }
  }
}
</script>

<style>

</style>

<style scoped>
</style>