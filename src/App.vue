<template>
  <div id="app">
    <div class="flex-col  h-full p-4 shadow-outline">
            <h1 class="flex-1  text-center text-5xl  text-blue-600 ">Shope.com</h1>
            
            
            <SearchBox v-on:searching="searchingList" > </SearchBox>
            
            <div class="text-lg ">{{processFeedback}}</div>

            <template>
                <div class="w-full h-auto p-2 mt-4 " >
                    <svg class="animate-bounce w-6 h-6 text-blue-600 " fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>

                    <AddList  v-on:delete-image="deleteImageFromAddList"  :data="addListImage" comp="addlist"> Your Shoping Cart  List</Addlist>
                    
                    <br>    

                    <AddList  v-on:add-image="addToList" :data="imageList" comp="list"> All list product </Addlist>

                </div>

                        <notifications />

            </template>

        </div>
  

      

  


    <!-- e nd div app -->
  </div>
</template>

<script>

import AddList from './components/AddList';
import SearchBox from './components/SearchBox';
import data from "./assets/data.js";

export default {
  name: 'App',
  components:{
    AddList,
    SearchBox
  },
     computed: {
            countList:function(){
              return "Total List Image: " + this.imageList.length + ', Total Add List Image: ' + this.addListImage.length;
            },
            processFeedback: function() {
                if(!this.searching && this.search.length < 3 && this.search.length != 0){
                     return "Sorry, minimal 3 character for searching";
                }
                else if (!this.searching && this.imageList.length <= 0) {
                    console.log('notfound')
                    return "Sorry, Your image not found.";
                } else if (this.searching) {
                    console.log('found')
                    return "Searching, wait for second...";
                }
                else{
                  return "";
                }
            }
        },
        watch: {
            search: async function() {
                  if(this.search.length < 3){
                       this.searching = false;
                      this.imageList = this.resources;
                  }
                  else{
                      this.searching = true;
                        await this.waitingForSearch(1000);
                        this.imageList = this.resources.filter((data) =>
                            data.title.startsWith(this.search)
                        );
                        this.searching = false;
                  }
                    

            }

        },
        methods: {
            searchingList: function(val){
                this.search = val;
            },
          deleteImageFromAddList(newAddList, deletedData){
            this.imageList.push(deletedData);
            this.addListImage = newAddList;
            this.refreshImageData();
             this.$notify( 'Remove item from cart');
          },
          refreshImageData(){
            this.imageList = this.imageList.filter(({id})=>{
               return !this.addListImage.some(x=>x.id == id)
             })
             this.resources = this.imageList;
          },
          addToList: function(val){
              console.log(val);
             this.addListImage.push(val);
             this.refreshImageData();
             this.$notify( 'added item to cart');
          },
            waitingForSearch: function(time) {
                return new Promise((resolve) => setTimeout(resolve, time));

            },
        },
         created() {
            this.imageList = this.resources;
        },
  data(){
    return {
       search: "",
       searching: false,
       addListImage:[],
      resources: data
      // akhir return
    }
  }
}
</script>

<style>

</style>

<style scoped>
</style>