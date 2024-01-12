<template>
  <footer v-for="items in app" :key="items"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start justify-between p-12 bg-footer text-white">
      <div class="items-center flex flex-col gap-3 text-center">
        <div class="w-96">
          <img src="@/assets/logo.png" class="w-full" alt="">
        </div>
        <div class="mb-4">
          <p>{{ items.Copyright }}</p>
          <p>All rights reserved</p>
        </div>
        <div class="flex flex-row gap-6">
          <div v-for="item in items.social" :key="item.id" class="w-max h-max">
            <a :href="item.link" class="w-12 h-12 flex rounded-full bg-slate-950 items-center text-center"><span
                class="w-1/2 m-auto flex"><font-awesome-icon class="w-full h-full m-auto"
                  :icon="['fab', item.icon]" /></span></a>
          </div>
        </div>
      </div>
      <div class="flex flex-col m-auto h-full pt-16 gap-2">
        <h4 class=" font-semibold text-lg mb-6">Company</h4>
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'about' }">About us</router-link>
        <router-link :to="{ name: 'Facilities' }">Facilities</router-link>
        <router-link :to="{ name: 'Gallary' }">Gallary</router-link>
        <router-link :to="{ name: 'Media' }">Media</router-link>
      </div>
      <div class="flex flex-col m-auto h-full pt-16 gap-2">
        <h4 class=" font-semibold text-lg mb-6">support</h4>
        <p>Help center</p>
        <router-link :to="{ name: 'contact' }">Contact us</router-link>
        <p>Legal</p>
        <p>Status</p>
      </div>
      <div class="flex flex-col m-auto h-full pt-16 gap-2">
        <h4 class=" font-semibold text-lg mb-6 m-auto md:m-0 md:mb-6">Stay up to date</h4>
        <div class="relative w-64">
          <input type="email" name="email" id="email" placeholder="Enter your email address"
            class="w-full px-4 py-2 border border-gray-600 bg-gray-600 text-gray-700 rounded focus:outline-none focus:ring focus:border-gray-900" />
          <div class="absolute right-3 top-2">
            <font-awesome-icon :icon="['fas', 'paper-plane']" class=" text-footer w-3 h-3" />        
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  
  export default {
    name: 'footer',
    props: ['api'],
    data() {
      return {
        app: ""
      }
    },
    mounted() {
      fetch(this.api + 'app')
        .then(res => res.json())
        .then(data => this.app = data)
        .catch(err => console.log(err.message));
    },
  }
  </script>