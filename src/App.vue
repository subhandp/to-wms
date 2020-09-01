<template>
  <div id="app" class="bg-gray-100 font-family-karla flex">

		
    <Sidebar/>

    <div class="w-full flex flex-col h-screen overflow-y-hidden">
        <!-- Desktop Header -->
      
      <Header/>

        
        <div class="w-full overflow-x-hidden border-t flex flex-col">
            <main class="w-full flex-grow p-6">
                <h1 class="text-3xl text-black pb-6">Dashboard</h1>
                <div class="w-full mt-12">
                   
                    <div class="bg-white overflow-auto">
                                                                                                                            
                            <router-view></router-view>
                            <!-- <Table :items="products.items" :columns="products.columns"></Table> -->
                    </div>
                </div>
            </main>
    
            <footer class="w-full bg-white text-right p-4">
               SIMPLE - WMS
            </footer>
        </div>
        
    </div>

  </div>
</template>

<script>

import Sidebar from './views/layouts/Sidebar'
import Header from './views/layouts/Header'
// import BarChart from './components/BarChart'
// import Table from './components/Table'

// import { mapState,mapMutations,mapActions } from 'vuex'

export default {
  name: 'App',
  components:{
    // LayoutFooter,LayoutHeader,LayoutNavbar,LayoutSidebar,WidgetPopular
    Sidebar,Header
  },
//      computed: {
//     ...mapState(['logoutMenuOpen', 'products']),
//   },
//     methods: {
//     ...mapMutations(['openCloseLogoutMenu']),
//     ...mapActions(["getProducts"]),
//     },
//     created() {
//         this.getProducts()
//     },
  data(){
    return{
      title : 'Dashboard'
    }
  }
}
</script>

<style>

</style>

<style scoped>
.font-family-karla { font-family: karla; }
        .bg-sidebar { background: #3d68ff; }
        .cta-btn { color: #3d68ff; }
        .upgrade-btn { background: #1947ee; }
        .upgrade-btn:hover { background: #0038fd; }
        .active-nav-link { background: #1947ee; }
        .nav-item:hover { background: #1947ee; }
        .account-link:hover { background: #3d68ff; }
</style>