<template>
<article class="mb-12" >
	<div v-bind:key="post.id" v-for="post in Posts">
		<h2 class="mb-4">
		<a href="#" class="text-black text-xl md:text-2xl no-underline hover:underline">
		{{post.title}}
		</a>
		</h2>

		<div class="mb-4 text-sm text-gray-700">
			by <a href="#" class="text-gray-700">Joe Bloggs</a> on 19th March 2019

		</div>

		<p class="text-gray-700 leading-normal">
		{{post.body | readmore}}
		</p>
				<div class="flex justify-between text-xs">
						<a href="#" class="bg-black text-white no-underline py-2 px-3 rounded">Readmore..</a>
						
					</div>
		<br>
	</div>
</article>


</template>

<script>
import  PostsData from '../assets/data/posts'
export default {
  name: "Page",
  data(){
	return {
		Posts : PostsData,
		PageTitle: "Welcome to my Post Data" 	   
    }
  },
  methods:{

  },
  created(){
	this.$emit('open-page',this.PageTitle)
  }
};
</script>