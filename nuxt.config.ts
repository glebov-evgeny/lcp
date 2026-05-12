export default defineNuxtConfig({
  compatibilityDate: '2026-05-12',
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
    langDir: '../locales/langs',
    lazy: false,
    strategy: 'no_prefix',
    locales: [
      { code: 'en', file: 'en.yaml' },
      { code: 'ru', file: 'ru.yaml' }
    ],
    vueI18n: './i18n.config.ts',
    experimental: {
      jsCompositionFunctions: true
    },
    bundle: {
      fullInstall: true,
      runtimeOnly: false
    } 
  }
})