import { createApp } from 'vue'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { createPinia } from 'pinia'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
  },
  display: {
    mobileBreakpoint: 'sm',
    thresholds: {
      sm: 720,
    },
  },
})

const Vue = createApp(App)
Vue.use(vuetify)
Vue.use(createPinia())
Vue.mount('#app')
