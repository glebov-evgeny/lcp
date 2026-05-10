// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss'
  ],
  app: {
    baseURL: '/lcp/'
  },
  css: ['~/assets/css/main.css'],
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English' },
      { code: 'ru', name: 'Русский' }
    ]
  },

  compatibilityDate: '2026-05-09'
})
