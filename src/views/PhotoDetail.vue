<template>
 <div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" :src="image" alt="Sunset in the mountains">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{photo[0].title}}</div>
            <p class="text-gray-700 text-base">
            {{photo[0].body}}
            </p>
        </div>
        </div>
 </div>
</template>

<script>
import  PhotosData from '../assets/data/photos'

export default {
  name: "PhotoDetail",
  data(){
    return{
      resource: PhotosData,
      photo: '',
      image: "https://via.placeholder.com/150/197d29" 
    }
  },
  
  created(){
    this.photo = this.getDataById(this.resource,this.$route.params.id)
  }
};
</script>