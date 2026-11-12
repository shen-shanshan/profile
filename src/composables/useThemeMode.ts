import { useTheme } from 'vuetify'
import { computed, watchEffect } from 'vue'

type ThemeName = 'light' | 'dark'

const STORAGE_KEY = 'theme'
const systemDark = window.matchMedia('(prefers-color-scheme: dark)')

// Follow the system unless the visitor has explicitly picked a theme.
function detectTheme(): ThemeName {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'light' || saved === 'dark') return saved
  return systemDark.matches ? 'dark' : 'light'
}

export function useThemeMode() {
  const theme = useTheme()
  const isDark = computed(() => theme.global.current.value.dark)

  function setTheme(name: ThemeName) {
    theme.global.name.value = name
    localStorage.setItem(STORAGE_KEY, name)
  }

  function toggleTheme() {
    setTheme(isDark.value ? 'light' : 'dark')
  }

  return { isDark, toggleTheme }
}

// Call once from the root component: keeps <html data-theme> in sync (used by
// main.css) and tracks system changes while no explicit choice is saved.
export function syncThemeWithDocument() {
  const theme = useTheme()

  watchEffect(() => {
    document.documentElement.dataset.theme = theme.global.name.value
  })

  systemDark.addEventListener('change', (e) => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      theme.global.name.value = e.matches ? 'dark' : 'light'
    }
  })
}

export { detectTheme }
