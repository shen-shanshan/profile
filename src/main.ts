import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css'

// Locales
import en from './locales/en'
import zh from './locales/zh'
import { detectLocale } from './composables/useLocale'
import { detectTheme } from './composables/useThemeMode'

const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: 'en',
  messages: { en, zh },
  // Messages intentionally contain HTML rendered via v-html.
  warnHtmlMessage: false,
})

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: detectTheme(),
    themes: {
      light: { colors: { background: '#ffffff', surface: '#ffffff' } },
      dark: { colors: { background: '#16181d', surface: '#16181d' } },
    },
  },
})

const app = createApp(App)

app.use(i18n)
app.use(vuetify)
app.use(router)

app.mount('#app')
