
<template>

<table class="min-w-full bg-white">
    <thead class="bg-gray-800 text-white">
        <tr>
            <th class="text-left py-3 px-4 uppercase font-semibold text-sm" v-for="(column, index) in columns" :key="index"> {{column}}</th>
        </tr>
    </thead>
    <tbody class="text-gray-700" >
        
        <tr v-for="(item, index) in items" :key="index">
              <td  class="w-1/3 text-left py-3 px-4" v-for="(column, indexColumn) in columns" :key="indexColumn">{{item[column]}}</td>
          </tr>

    </tbody>
</table>
</template>

<script>
export default {
  name: "Table",
  data (){
  },
  props: ['items','columns'],
  created(){
  }
};
</script>