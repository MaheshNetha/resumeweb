import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  nitro: { preset: 'static' },

  app: {
    baseURL: '/resumeweb/',
    head: {
      title: 'Mahesh Ravirala — Software Developer',
      meta: [
        { name: 'description', content: 'Mahesh Ravirala — Vue, JavaScript, Node.js. Portfolio and resume.' }
      ]
    }
  },

  css: ['~/assets/style.css'],
  build: { transpile: [] },
  generate: { dir: 'dist' },

  runtimeConfig: {
    public: {
      email: 'ravirala444@gmail.com',
      phone: '+919553754570',
      portfolio: 'https://teknetha.in/maheshravirala/portfolio/'
    }
  }
})
