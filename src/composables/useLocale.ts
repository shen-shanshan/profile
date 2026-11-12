import { useI18n } from 'vue-i18n'

const STORAGE_KEY = 'locale'

// English by default; only a locale the visitor explicitly picked is remembered.
function detectLocale(): string {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'zh' || saved === 'en') return saved
  return 'en'
}

export function useLocale() {
  const { locale } = useI18n()

  function setLocale(newLocale: string) {
    locale.value = newLocale
    localStorage.setItem(STORAGE_KEY, newLocale)
    document.documentElement.lang = newLocale === 'zh' ? 'zh-CN' : 'en'
  }

  function toggleLocale() {
    setLocale(locale.value === 'zh' ? 'en' : 'zh')
  }

  return { locale, setLocale, toggleLocale, detectLocale }
}

export { detectLocale }
