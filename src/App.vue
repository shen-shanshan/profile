<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopNavigationBar from '@/components/TopNavigationBar.vue'
import { useI18n } from 'vue-i18n'
import { watch } from 'vue'
import { syncThemeWithDocument } from '@/composables/useThemeMode'

const { locale } = useI18n()

document.documentElement.lang = locale.value === 'zh' ? 'zh-CN' : 'en'

watch(locale, () => {
  document.documentElement.lang = locale.value === 'zh' ? 'zh-CN' : 'en'
})

syncThemeWithDocument()
</script>

<template>
  <v-app>
  <TopNavigationBar />
  <v-main>
    <RouterView />
  </v-main>
  </v-app>
</template>
