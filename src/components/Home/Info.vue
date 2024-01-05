<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-4 text-center mt-16 mb-10 m-auto">
      <div v-for="card in cards" :key="card.id" class="flex m-auto flex-col items-center p-3 gap-1 rounded bg-white shadow-md w-52">
        <font-awesome-icon :icon="['fas', card.icon]" class="text-4xl mb-2" />
        <h4 class="text-lg font-semibold">{{ card.title }}</h4>
        <p class="text-sm">{{ card.content }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['api'],
    name: 'Info',
    data() {
      return {
        cards: [],
      };
    },
    mounted() {
      fetch(this.api + 'home-cards')
        .then((res) => res.json())
        .then((data) => (this.cards = data))
        .catch((err) => console.log(err.message));
    },
  };
  </script>
  
  <style scoped>
  </style>
  