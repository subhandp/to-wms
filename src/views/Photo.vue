<template>
<div>
                   <!-- <h1 class="text-center bg-indigo-300">tes</h1> -->
                    <div class="flex flex-wrap -mx-2 "  v-bind:key="photo.id" v-for="photo in photos">
                        
                        <div v-bind:key="image.id" v-for="image in data" class="w-1/4 sm:px-2 w-">
                            <div class="max-w-sm rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                                <img class="w-full" alt="image empty">
                                <div class="px-6 py-4">
                                  <p class="sm:block  text-base text-center ">
                                    {{photo.title}}
                                  </p>

           
                                        <div class="inline-flex">
                                              <div class="bg-gray-300  text-gray-800 font-bold py-2 px-4 rounded-l">
                                              tes
                                              </div>
                                              <button   class="bg-blue-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-r">
                                              Add to Cart
                                              </button>
                                          </div>


                                     
                                </div>

                              </div><br>

                        </div>
                    </div>
                    
  </div>
</template>

<script>

import Photos from '../assets/data/photos'

export default {
  name: 'AddList',
  data  () {
      return {
          photos : Photos
      }
  },
   methods:{

   }
}   
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
