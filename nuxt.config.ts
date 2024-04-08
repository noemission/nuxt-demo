// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    // all routes (by default) will be revalidated every 60 seconds, in the background
    '/**': { isr: 60 },
  },
  runtimeConfig: {
    nitro: { envPrefix: 'VERCEL_' },
    region: process.env.VERCEL_REGION,
  },
})
