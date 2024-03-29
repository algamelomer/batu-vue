import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import CountUp from 'vue-countup-v3';

library.add(faUserSecret, faUsers, fas, fab)


const app = createApp(App)

app.use(router).component('font-awesome-icon', FontAwesomeIcon)
app.component('CountUp', CountUp) // Fix: use CountUp instead of VueCountUp

app.mount('#app')