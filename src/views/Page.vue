<template>
<article class="mb-12" >
	<div v-bind:key="post.id" v-for="post in Posts">
		<h2 class="mb-4">
		<a href="#" class="text-black text-xl md:text-2xl no-underline hover:underline">
		{{post.title}}
		</a>
		</h2>

		<p class="text-gray-700 leading-normal">
		{{post.body | readmore}}
		</p>
				<div class="flex justify-between text-xs">
						<router-link class="bg-black text-white no-underline py-2 px-3 rounded" :to="{ name: 'postdetail', params: {id: post.id}}" > Readmore..</router-link>
					</div>
		<br>
		
	</div>
	<!-- <router-view :data="resource" url="posts/page" :pageSize="pageSize"></router-view> -->
	<Paginate :data="resource" url="postspage" :pageSize="pageSize" ></Paginate>
	
</article>



</template>

<script>
// menggunakan mixins untuk paginate
import  PostsData from '../assets/data/posts'
import Paginate from '../components/Paginate'
export default {
  name: "Page",
  components:{
	Paginate
  },
  data(){
	return {
		resource: PostsData,
		Posts : this.getData(PostsData,5, this.$route.params.id),
		PageTitle: "Welcome to my Post Data" ,
		pageSize: 5
    }
  },

  created(){
	this.$emit('open-page',this.PageTitle)
	this.setWidgetPopular(PostsData,'post','postspage')
  },
//   watch: {
//     $route(to, from) {
// 		console.log('to',to)
// 		console.log('from',from)

//       this.Posts = this.getData(PostsData,5, this.$route.params.id)
//     }
//   }

};
</script>