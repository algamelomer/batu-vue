<template>
<div v-for="items in learnmore" :key="items" class="flex flex-col gap-8 text-center items-center bg-neutral_silver py-5">
<h1 class="max-w-40rem text-5xl font-semibold">{{ items.title }}</h1>
<a :href="items.link" class="rounded border-2 border-transparent bg-Brand_Primary py-3 px-6 text-white text-xs font-medium font-inter gap-1 flex">Learnmore <span><font-awesome-icon icon="arrow-right" /></span></a>
</div>
</template>

<script>
  export default {
    props: ['api'],
    name: 'Learnmore',
    data(){
        return{
        learnmore: null
        }
    },
    mounted() {
      fetch(this.api + 'home-learnmore')
        .then(res => res.json())
        .then(data => this.learnmore = data)
        .catch(err => console.log(err.message));
    }
  }
  </script>
  