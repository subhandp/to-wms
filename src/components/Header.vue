<template>
    <div>
          <header class="w-full flex items-center bg-white py-2 px-6 hidden sm:flex">
            <div class="w-1/2"></div>
            <div class="relative w-1/2 flex justify-end">
                <button @click="openCloseLogoutMenu" class="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
                  
                    <img src='https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Sunglasses&hatColor=Blue01&facialHairType=BeardMagestic&facialHairColor=Black&clotheType=GraphicShirt&clotheColor=PastelBlue&graphicType=Pizza&eyeType=EyeRoll&eyebrowType=UpDownNatural&mouthType=Twinkle&skinColor=DarkBrown'
/>
                </button>
        
                <button v-show="logoutMenuOpen"  @click="openCloseLogoutMenu" class="h-full w-full fixed inset-0 cursor-default"></button>
                <div v-show="logoutMenuOpen" class="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16 z-40">
                    
                    <a href="#" @click="logoutUser()" class="block px-4 py-2 account-link hover:text-white">Log Out</a>
                </div>
            </div>
        </header>

        <!-- Mobile Header & Nav -->
        <header class="w-full bg-sidebar py-5 px-6 sm:hidden">
            <div class="flex items-center justify-between">
                <a href="index.html" class="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
                <button @click="openCloseLogoutMenu" class="text-white text-3xl focus:outline-none">
                    <i v-show="!logoutMenuOpen" class="fas fa-bars"></i>
                    <i  v-show="logoutMenuOpen" class="fas fa-times"></i>
                </button>
            </div>

            <!-- Dropdown Nav -->
            <!-- 78 <nav :class="isOpen ? 'flex': 'hidden'" class="flex flex-col pt-4"> -->
            <nav  :class="logoutMenuOpen ? 'flex' : 'hidden'" class="flex flex-col pt-4">
                <a href="#" class="flex items-center active-nav-link text-white py-2 pl-4 nav-item">
                    <i class="fas fa-tachometer-alt mr-3"></i>
                    Dashboard
                </a>
        
                <a href="#" class="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i class="fas fa-sign-out-alt mr-3"></i>
                    Sign Out
                </a>

            </nav>
            <!-- <button class="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                <i class="fas fa-plus mr-3"></i> New Report
            </button> -->
        </header>
    </div>
</template>


<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
        logoutMenuOpen: state => state.template.logoutMenuOpen
        }),
  },
    methods: {
      openCloseLogoutMenu() {
        this.$store.dispatch('template/openCloseLogoutMenu');
      },
      logoutUser() {
           if(confirm("Do you really want to log out?")){
               this.$store.dispatch("users/logout");
               this.$router.push('/login')
           }
        
        }
    }
  
}
</script>