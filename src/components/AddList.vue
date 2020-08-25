<template>
<div class="flex-col  h-full p-4 shadow-outline">
      <div class="flex  w-full h-auto p-2 mt-4 " >
                   
                    <div class="flex flex-wrap -mx-2 ">
                        
                        <div v-bind:key="image.id" v-for="image in addListImage" class="w-1/3 sm:px-2 w-">

                            <div class="max-w-sm rounded overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                                <img class="w-full" :src="image.thumbnailUrl"  alt="image empty">
                                <div class="px-6 py-4">
                                  <p class="sm:block  text-base text-center ">
                                    {{image.title}}
                                  </p>
                                     <button @click="removeFromList(image)" style="color: red">click me for remove from list</button>
                                </div>

                              </div><br>

                        </div>
                    </div>
                </div>
  </div>
</template>

<script>
export default {
  name: 'AddList',
  props: [
    "addListImage"
  ],
   methods:{
       removeFromList: function(val){
          const newAddList =  this.addListImage.filter((data)=>{
               return data.id != val.id;
           })
            this.$emit('delete-image', newAddList);
       }
   }
}   
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
