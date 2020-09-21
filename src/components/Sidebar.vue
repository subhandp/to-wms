<template>
<aside class="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
        <div class="p-6 text-center">
            <a href="index.html" class="text-white text-3xl font-semibold uppercase hover:text-gray-300">WMS ADMIN</a>
        </div>

            <router-link :to="{name: 'dashboard'}" class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"> <i class="fas fa-table mr-3"></i> Dashboard</router-link> 
            <router-link :to="{name: 'products'}"  class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">  <i class="fas fa-table mr-3"></i>Product </router-link> 
            
    </aside>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>