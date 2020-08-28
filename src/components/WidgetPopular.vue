<template>
					<aside class="rounded shadow overflow-hidden mb-6">
						<h3 class="text-sm bg-gray-100 text-gray-700 py-3 px-4 border-b">Popular {{datasetName}}</h3>

						<div class="p-4">
							<ul class="list-reset leading-normal" :key="data.id" v-for="data in resource">
								<li><router-link :to="{ name: routeName, params: {id: data.id }}" class="text-gray-darkest text-sm">{{data.title | readmore(15)}}</router-link> </li>
                                <hr>
                            </ul>
						</div>
					</aside>
</template>

<script>
export default {
  name: "WidgetPopular",
  data(){
      return{
          routeName: '',
          datasetName: '',
          resource: ''
      }
  },
  created(){
      this.routeName = this.widgetPopular().routeName 
      this.datasetName = this.widgetPopular().datasetName
      this.resource =  this.widgetPopular().dataset.slice(0,5)
      console.log(this.widgetPopular().dataset);
  }
};
</script>