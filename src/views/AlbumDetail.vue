<template>
 <div class="max-w-sm rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                <img class="w-full" :src="image" alt="image empty">
                <div class="px-6 py-4">
                    <p class="sm:block  text-base text-center ">
                    {{album[0].title}}
                    </p>
                        
                </div>

                </div>
</template>

<script>
import  AlbumsData from '../assets/data/albums'

export default {
  name: "AlbumDetail",
  data(){
    return{
      resource: AlbumsData,
      album: '',
      image: "https://via.placeholder.com/600/771796"
    }
  },
  
  created(){
    this.album = this.getDataById(this.resource,this.$route.params.id)
  }
};
</script>