import { mdi } from 'vuetify/iconsets/mdi';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { icons } from '@iconify-json/mdi'

const vuetify = createVuetify({
    icons,
    components,
    directives
})

async function main() {
    try {
        const app = createApp(App)
        app.use(createPinia())
        app.use(vuetify)
        app.use(router)
        app.mount('#app')
    } catch (error) {
        console.error('Error while mounting app', error)
    }
}

main()
