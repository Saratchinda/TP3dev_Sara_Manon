import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { FontAwesomeIcon } from './lib/fontAwesome.js'

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
