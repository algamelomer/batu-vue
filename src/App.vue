<template>
  <header class="flex justify-between items-center py-3 px-12 relative">
    <div class="w-44">
      <img src="./assets/logo.png" class="w-full" alt="">
    </div>
    <button @click="toggleMobileNav" class="md:hidden text-gray-600 focus:outline-none">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
  <nav ref="navbar"  :class="{ 'hidden': !isNavbarVisible, 'flex': isNavbarVisible }" class="md:static md:flex md:flex-row md:justify-between md:gap-4 md:p-0 absolute px-2 flex-col right-10 top-16 z-10 bg-white">
    <router-link :to="{name: 'home'}">Home</router-link>
    <router-link :to="{name:'about'}">About us</router-link>
    <router-link :to="{name:'Facilities'}">Facilities</router-link>
    <router-link :to="{name: 'Gallary'}">Gallary</router-link>
    <router-link :to="{name: 'Media'}">Media</router-link>
    <router-link :to="{name: 'contact'}">Contact us</router-link>
  </nav>
</header>
  <router-view/>
</template>

<script>
export default{
  name:'app',
  data(){
    return{
      isNavbarVisible: false,
    }
  },
  methods:{
    toggleMobileNav(){
      this.isNavbarVisible = !this.isNavbarVisible;
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
