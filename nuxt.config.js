module.exports = {
  head: {
    title: '高橋さん案件',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '楽しいことしたい' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
    middleware: 'auth'
  },

  env: {
    ENV_APIKEY: process.env.APIKEY,
    ENV_AUTHDOMAIN: process.env.AUTHDOMAIN,
    ENV_DATABASEURL: process.env.DATABASEURL,
    ENV_PROJECTID: process.env.PROJECTID,
    ENV_STORAGEBUCKET: process.env.STORAGEBUCKET,
    ENV_MESSAGINGSENDERID: process.env.MESSAGINGSENDERID,
  },

  plugins: [
    { src: '@/plugins/localStorage.js', ssr: false }
  ],

  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    ['nuxt-sass-resources-loader', '@/assets/scss/variable.scss']
  ],

  axios: {
  },

  css: [
    '@/assets/scss/reset.scss',
    '@/assets/scss/variable.scss',
    '@/assets/scss/layout.scss',
    '@/assets/scss/common.scss',
    '@fortawesome/fontawesome-free-webfonts',
    '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css',
  ],

  loading: { color: '#3B8070' },

  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
