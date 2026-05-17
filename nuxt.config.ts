export default defineNuxtConfig({
  compatibilityDate: '2026-05-12',

  ssr: true,

  modules: [
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
  ],

  app: {
    baseURL: '/lcp/',
    buildAssetsDir: 'assets',
  },

  css: ['./assets/css/main.css', '~/assets/scss/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/variables/_colors.scss" as *;'
        }
      }
    }
  },
  components: {
    global: true,
    dirs: [
      { path: '~/components/sections', pathPrefix: false },
      { path: '~/components/molecules', pathPrefix: false },
      { path: '~/components/atoms', pathPrefix: false },
    ],
  },

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