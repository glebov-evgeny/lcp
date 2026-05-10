export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: true,

  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss'
  ],
  app: {
    baseURL: '/lcp/',
    buildAssetsDir: 'assets',
  },

  css: ['./assets/css/main.css'],

  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English' },
      { code: 'ru', name: 'Русский' }
    ]
  }
})