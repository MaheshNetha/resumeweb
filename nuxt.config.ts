import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: false, // SPA mode for GitHub Pages; set true if you prefer full SSR on other hosts
  target: 'static', // ensures generate works as expected
  nitro: {
    preset: 'static'
  },
  app: {
    baseURL: '/', // GitHub Pages will serve from root of gh-pages branch
    head: {
      title: 'Mahesh Ravirala — Software Developer',
      meta: [
        { name: 'description', content: 'Mahesh Ravirala — Vue, JavaScript, Node.js. Portfolio and resume.' }
      ]
    }
  },
  css: ['~/assets/style.css'],
  build: {
    transpile: []
  },
  generate: {
    dir: 'dist' // explicit output directory used by the workflow
  },
  runtimeConfig: {
    public: {
      email: 'ravirala444@gmail.com',
      phone: '+919553754570',
      portfolio: 'https://teknetha.in/maheshravirala/portfolio/'
    }
  }
})
