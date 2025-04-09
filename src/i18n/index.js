import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// JSON fayllarni import qilamiz
import ru from './locales/ru.json'
import uz from './locales/uz.json'
import en from './locales/en.json'

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: ru },
    uz: { translation: uz },
    en: { translation: en },
  },
  lng: 'ru', // default til
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
