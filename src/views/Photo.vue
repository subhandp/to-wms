<template>
<div>
                   <!-- <h1 class="text-center bg-indigo-300">tes</h1> -->
                    <div class="flex flex-wrap -mx-2 "  >
                        
                        <div class="w-1/2 sm:px-2 w-" v-bind:key="photo.id" v-for="photo in photos">

						<router-link :to="{ name: 'photodetail', params: {id: photo.id}}" > 
                      <div class="max-w-sm rounded overflow-hidden shadow-lg">
                            <img class="w-full" :src="image" alt="Sunset in the mountains">
                            <div class="px-6 py-4">
                              <div class="font-bold text-xl mb-2">{{photo.title}}</div>
                              <p class="text-gray-700 text-base">
                               {{photo.title | readmore(20)}}
                              </p>
                            </div>
                          </div>
            </router-link>
                        

                          <br>

                        </div>
                       
                    </div>
                     <Paginate :data="resource" url="photospage" :pageSize="pageSize"></Paginate>
  </div>
</template>

<script>
// menggunakan mixins untuk paginate
import Photos from '../assets/data/albums'
import Paginate from '../components/Paginate'
export default {
  name: 'Photo',
    components:{
	Paginate
  },
  data  () {
      return {
         resource: Photos,
          photos :  this.getData(Photos,5, this.$route.params.id),
          image: "https://via.placeholder.com/150/197d29" ,
          pageSize: 5	  
      }
  },
   methods:{

   }
}   
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
