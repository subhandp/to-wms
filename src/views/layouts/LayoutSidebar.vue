<template>

					<aside class="rounded shadow overflow-hidden mb-6">
						<h3 class="text-sm bg-gray-100 text-gray-700 py-3 px-4 border-b">Menu</h3>

						<div class="p-4">
							<ul class="list-reset leading-normal">

								<li><router-link  :to="{ name: 'home' }" class="text-gray-darkest text-sm">Home</router-link> </li>
								<li><router-link  :to="{ name: 'postsindex' }" class="text-gray-darkest text-sm">Posts</router-link> </li>
								<li><router-link :to="{ name: 'photosindex' }" class="text-gray-darkest text-sm">Photos</router-link> </li>
								<li><router-link :to="{ name: 'albumsindex' }"  class="text-gray-darkest text-sm">Albums</router-link> </li>

							</ul>
						</div>
					</aside>
</template>

<script>
export default {
  name: "LayoutSidebar"
};
</script>