import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// langeage files
import en from './locales/en.json'
import kr from './locales/kr.json'

const messages = {
    en: en,
    kr: kr
}

const i18n = createI18n({
    locale: 'kr',
    messages
})
    
const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(store)

app.mount('#app')
