<template>	
    <div id="app" class="bg-gray-100 font-family-karla flex">
        <base-sidebar/>
        <div class="w-full flex flex-col h-screen overflow-y-hidden">

        <base-header/>

            <div class="w-full overflow-x-hidden border-t flex flex-col">
                <main class="w-full flex-grow p-6">
                     <v-app>
                    
                        <!-- <div class="flex flex-wrap mt-6"> -->
                                                                                                         
                              <router-view></router-view>

                              <v-snackbar
                              v-for="(snackbar, index) in snackbars.filter(s => s.showing)"
                              :key="snackbar.text + Math.random()"
                              v-model="snackbar.showing"
                              :timeout="snackbar.timeout"
                              :color="snackbar.color"
                              :style="`bottom: ${(index * 60) + 8}px`"
                            >
                              {{snackbar.text}}

                              <v-btn text @click="snackbar.showing = false">
                                Close
                              </v-btn>
                            </v-snackbar>

                     </v-app>
                        <!-- </div> -->
                </main>
        
                <base-footer/>

            </div>

        <!-- end of flex class -->
        </div>
        <!-- end of root after template -->
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import { mapState } from 'vuex';
export default {
  components:{

    'base-sidebar': Sidebar,
    'base-header': Header,
    'base-footer': Footer
  },

  data(){
    return{
      title : 'Dashboard'
    }
  },
    computed: {
    ...mapState({
      snackbars: state => state.snackbar.snackbars
    })
  },
  created(){
    this.$store.dispatch('products/getAllProducts');
    this.$store.dispatch('users/loadAll');

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