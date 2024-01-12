<template>
  <Header />
  <router-view />
  <Learnmore :api="api"/>
  <Footer :api="api"/>
</template>

<script>
import { api } from './api-config';
import Learnmore from '@/components/Learnmore.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Learnmore,
    Header,
    Footer
  },
  name: 'app',
  data() {
    return {
      api: api,
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

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #4D4D4D;
}

nav a {
  font-weight: bold;
  color: #4D4D4D;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #4FB3B3;
}</style>
