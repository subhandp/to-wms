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
		Posts : this.getData(),
		PageTitle: "Welcome to my Post Data" ,
    }
  },
  methods:{
	paginate(array, page_size, page_number){
		return array.slice((page_number - 1) * page_size, page_number * page_size);
	},
getData: function (){
	const PostsDataTotal =  PostsData.length

		const listNumberData = Array.from(Array(PostsDataTotal).keys(), n => n + 1)
		const pageNumber = this.$route.params.id ? this.$route.params.id : 1;
		const paginate = this.paginate(listNumberData, 5, pageNumber);
		const result = PostsData.slice(paginate[0]-1,paginate.pop());
		return result;
}
},
  created(){
	this.$emit('open-page',this.PageTitle)
  }
};
</script>