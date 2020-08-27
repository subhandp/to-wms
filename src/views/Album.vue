<template>
<div>
                   <!-- <h1 class="text-center bg-indigo-300">tes</h1> -->
                    <div class="flex flex-wrap -mx-2 "  >
                        
                        <div class="w-1/2 sm:px-2 w-" v-bind:key="album.id" v-for="album in albums">

                         <div class="max-w-sm rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                                <img class="w-full" :src="image" alt="image empty">
                                <div class="px-6 py-4">
                                  <p class="sm:block  text-base text-center ">
                                    {{album.title}}
                                  </p>

           
                                        <div class="inline-flex">
                                              <button   class="bg-blue-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-r">
                                              readmore..
                                              </button>
                                          </div>


                                     
                                </div>

                              </div>

                          <br>

                        </div>
                    </div>
                    
  </div>
</template>

<script>

import Albums from '../assets/data/albums'

export default {
  name: 'Album',
  data  () {
      return {
          albums : Albums,
          image: "https://via.placeholder.com/600/771796" 	  
      }
  },
   methods:{

   }
}   
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
