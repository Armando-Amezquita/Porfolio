import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
// import iconic from './plugins/iconic.vue'
// import './assets/sass/_global.scss'

// Vue.use(iconic)

const app = createApp(App);
app.use(router);
app.mount('#app');
