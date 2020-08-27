<template>
 <article class="mb-12" >
	<div >
		<h2 class="mb-4">
		<a href="#" class="text-black text-xl md:text-2xl no-underline hover:underline">
		{{post[0].title}}
		</a>
		</h2>

		<p class="text-gray-700 leading-normal">
		{{post[0].body}}
		</p>

		
	</div>

</article>
</template>

<script>
import  PostsData from '../assets/data/posts'

export default {
  name: "PageDetail",
  data(){
    return{
      resource: PostsData,
      post: ''
    }
  },
  
  created(){
    this.post = this.getDataById(this.resource,this.$route.params.id)
    console.log(this.post[0].title)
  }
};
</script>