<template>
<div>
                   <h1 class="text-center bg-indigo-300"><slot></slot></h1>
                    <div class="flex flex-wrap -mx-2 ">
                        
                        <div v-bind:key="image.id" v-for="image in data" class="w-1/4 sm:px-2 w-">
                            <div class="max-w-sm rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
                                <img class="w-full" :src="image.thumbnailUrl"  alt="image empty">
                                <div class="px-6 py-4">
                                  <p class="sm:block  text-base text-center ">
                                    {{image.title}}
                                  </p>

                                    <div v-if="comp == 'addlist'">

                                      <div class="inline-flex">
                                              <div class="bg-gray-300  text-gray-800 font-bold py-2 px-4 rounded-l">
                                              {{image.price | IDR}}
                                              </div>
                                              <button @click="removeFromList(image)"  class="bg-red-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-r">
                                              Remove from Cart
                                              </button>
                                          </div>

                                    </div>
                                    <div v-else-if="comp == 'list'">


                                        <div class="inline-flex">
                                              <div class="bg-gray-300  text-gray-800 font-bold py-2 px-4 rounded-l">
                                              {{image.price | IDR}}
                                              </div>
                                              <button @click="addToList(image)"  class="bg-blue-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-r">
                                              Add to Cart
                                              </button>
                                          </div>


                                    </div>
                                     
                                </div>

                              </div><br>

                        </div>
                    </div>
                    
  </div>
</template>

<script>
export default {
  name: 'AddList',
  props: {
    data: {
      type: Array,
      required: true,
    },
    comp:{
      type:String
    }
  },
   methods:{
       removeFromList: function(val){
          const newAddList =  this.data.filter((data)=>{
               return data.id != val.id;
           })
            this.$emit('delete-image', newAddList,val);
       },
       addToList: function(val){
     this.$emit('add-image',val);
   }
   }
}   
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
