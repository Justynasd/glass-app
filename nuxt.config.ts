// import i18n from './config/i18n';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: { transpile: ['@fawmi/vue-google-maps'] },
  runtimeConfig: {
    public: { GOOGLE_MAPS_API_KEY: 'AIzaSyB33KxZK5XS66anT1AmdH2EDTz1YDnJDKE' },
  },
  typescript: {
    shim: false,
  },
  css: [
    // SCSS file in the project
    '@/assets/scss/main.scss',
  ],
  image: {
    dir: 'public/img',
    // The screen sizes predefined by `@nuxt/image`:
    // screens: {
    //   xs: 320,
    //   sm: 640,
    //   md: 768,
    //   lg: 1024,
    //   xl: 1280,
    //   xxl: 1536,
    //   '2xl': 1536,
    // },
  },
  modules: ['@nuxt/image-edge', '@nuxtjs/i18n'],
  i18n: {
    locales: [
      {
        code: 'lt',
        name: 'Lietuvių',
        iso: 'lt-LT',
        // lazy loading order: `es.json` -> `es-AR.json`, and then merge 'es-AR.json' to 'es.json'
        files: ['lt-LT.json'],
      },
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        // lazy loading order: `es.json` -> `es-UY.json`, and then merge 'es-UY.json' to 'es.json'
        files: ['en-US.json'],
      },
    ],
    lazy: true,
    strategy: 'prefix',
    langDir: 'lang',
    defaultLocale: 'lt',
    vueI18n: {
      // If fallback is needed, you need to define
      fallbackLocale: 'lt',
    },
  },
});
