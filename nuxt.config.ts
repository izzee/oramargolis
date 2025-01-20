// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: [
    '@/styles/globals.css'
  ],

  modules: ['@nuxtjs/google-fonts', '@nuxt/content', '@nuxt/image'],

  googleFonts: {
    families: {
      Spectral: ['400'],
    }
  },
})