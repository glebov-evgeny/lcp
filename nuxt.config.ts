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
    defaultLocale: 'ru',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.yaml'
      },
      {
        code: 'ru',
        name: 'Русский',
        file: 'ru.yaml'
      }
    ],
    langDir: 'langs/',
    lazy: false,
    strategy: 'no_prefix',
  }
})