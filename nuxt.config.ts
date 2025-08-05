// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/sanity'],
  sanity: {
    projectId: '3990c1j5',
    dataset: 'production',
    apiVersion:  '2025-04-01',
  }
})