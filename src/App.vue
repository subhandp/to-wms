<template>
  <div id="app">

<html lang="en">
	<head>

		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">

	

		<title>Blog</title>

	</head>
	<body>

		<!-- header -->
		<LayoutHeader></LayoutHeader>
		<!-- /header -->

		<!-- nav -->
	<LayoutNavbar></LayoutNavbar>
		<!-- /nav -->

		<!-- blog -->
		<div class="w-full bg-white">

			<!-- title -->
			<div class="text-center px-6 py-12 mb-6 bg-gray-100 border-b">
				<h1 class=" text-xl md:text-4xl pb-4" >{{title}}</h1>
				<p class="leading-loose text-gray-dark">
					Catch up on the latest news and updates.
				</p>
			</div>
			<!-- /title -->

			<div class="container max-w-4xl mx-auto md:flex items-start py-8 px-12 md:px-0">

				<!-- articles -->
				<div class="w-full md:pr-12 mb-12">
					

					<router-view></router-view>
         <!-- <Page></Page> -->

					<div class="flex justify-between text-xs">
						<a href="#" class="bg-gray text-white no-underline py-2 px-3 rounded">Previous</a>
						<a href="#" class="bg-black text-white no-underline py-2 px-3 rounded">Next</a>
					</div>
				</div>
				<!--/ articles -->

				<!-- sidebar -->
				<LayoutSidebar></LayoutSidebar>
				<!-- /sidebar -->

			</div>

		</div>
		<!-- /blog -->


		<!-- footer -->
  <LayoutFooter></LayoutFooter>
		<!-- /footer -->


	</body>
</html>

  </div>
</template>

<script>

import LayoutFooter from './views/layouts/LayoutFooter'
import LayoutHeader from './views/layouts/LayoutHeader'
import LayoutNavbar from './views/layouts/LayoutNavbar'
import LayoutSidebar from './views/layouts/LayoutSidebar'
// import Page from './views/Page'
// import Albums from './assets/data/albums'
// import Photos from './assets/data/photos'
// import Posts from './assets/data/posts'



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