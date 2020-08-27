<template>
<nav class="w-full bg-white md:pt-0 px-6 relative z-20 border-t border-b border-gray-light">
	<div class="container mx-auto max-w-4xl md:flex justify-between items-center text-sm md:text-md md:justify-start">
			<div class="w-full md:w-1/2 text-center md:text-left py-4 flex flex-wrap justify-center items-stretch md:justify-start md:items-start">
			<a href="/posts" class="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-light">Posts</a>
			<a href="/photos" class="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-light">Photos</a>
			<a href="/albums" class="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-light">Albums</a>
		</div>
		<div class="w-full md:w-1/2 text-center md:text-right">
		<!-- extra links -->
		</div>
	</div>
</nav>
</template>

<script>
export default {
  name: "LayoutNavbar",
  data(){

  },
  methods:{

  }
};
</script>