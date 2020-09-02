<template>
<aside class="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">

        <nav class="text-white text-base font-semibold pt-3">
            <a href="index.html" class="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
                <i class="fas fa-tachometer-alt mr-3"></i>
                Dashboard
            </a>
        </nav>
              
            <router-link :to="{name: 'productin'}" class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item"> <i class="fas fa-table mr-3"></i> Product In</router-link> 
            <router-link :to="{name: 'product'}"  class="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">  <i class="fas fa-table mr-3"></i>Product </router-link> 
           
            
    </aside>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>