// https://nuxt.com/docs/api/configuration/nuxt-config

import path from 'node:path'

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@pinia/nuxt',
  ],
  postcss: {
    // Add plugin names as key and arguments as value
    // Install them before as dependencies with npm or yarn
    plugins: {
      'postcss-nested-ancestors': {},
      'postcss-nested': {},
      'postcss-inline-svg': {
        paths: [path.join(__dirname, './assets/images/')],
        removeFill: true,
      },
      'cssnano': {
        preset: 'default',
      },
    },
  },
})
