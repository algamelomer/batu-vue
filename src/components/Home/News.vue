<template>
    <div v-for="items in news" :key="items.id" class="w-full md:w-10/12 text-center content-center items-center justify-center flex flex-col gap-4 m-auto">
      <h1 class="text-gray-700 text-center font-inter text-2xl font-semibold">{{ items.title }}</h1>
      <p class="text-gray-700 max-w-96 text-center font-inter font-normal text-sm m-auto">{{ items.content }}</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center">
        <div v-for="card in items.cards" :key="card.id" class="w-64 h-40 relative flex mb-24">
          <img class="w-full h-full object-cover" :src="getCardImage(card.id)" alt="">
          <div class="absolute z-10 bg-neutral_silver rounded shadow-lg shadow-slate-500 left-1/2 transform -translate-x-1/2 top-3/4 w-52 h-24 gap-2 flex flex-col">
            <p>
              {{ card.content }}
            </p>
            <a :href="card.link" class="text-Brand_Primary font-inter text-sm font-semibold">Readmore <span><font-awesome-icon icon="arrow-right" /></span></a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['api'],
    name: 'News',
    data() {
      return {
        news: null,
      };
    },
    methods: {
      getCardImage(card) {
        return `public/${card}.jpeg`;
      },
    },
    mounted() {
      fetch(this.api + 'home-news')
        .then(res => res.json())
        .then(data => this.news = data)
        .catch(err => console.log(err.message));
    }
  }
  </script>
  