<template>

<div>
    <div class="flex items-center border-b-2 py-2">
        <input
            type="text"
            v-model="search"
            v-on:keyup="searchingKeyUp"
            class="text-2xl w-full  mr-3 py-1 px-2 leading-tight outline-none hover:bg-blue-100"
            placeholder="Search Here product here"
        />
            </div>

</div>

</template>

<script>
export default {
  name: "SearchBox",
  data(){
    return {
       search: ''
    }
  },
  methods:{
      searchingKeyUp : function(){
         this.$emit('searching',  this.search)
      }
  }
};
</script>