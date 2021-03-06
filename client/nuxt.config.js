import colors from 'vuetify/es5/util/colors'

export default {
  router: {
    // add it if using github deploy
    // base: '/gbproject/'
    base: ''
  },
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@assets/index.css',
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '@/plugins/vue-cookie.js', mode: 'client' },
    { src: '@/plugins/vuex-persist', mode: 'client' },
    { src: '@/plugins/vueTour.js', mode: 'client' },
    { src: '@/plugins/element-ui', mode: 'client' },
    { src: '@/plugins/websocket-async-client', mode: 'client' }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    ['nuxt-i18n', {
      locales: [
        {
          name: '繁體中文',
          code: 'zh-TW',
          iso: 'zh-TW',
          file: 'zh-tw.js'
        },
        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
          file: 'en.js'
        }
      ],
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'en',
      strategy: 'no_prefix',
      detectBrowserLanguage: {
        // 將目前指定語系寫入cookie
        useCookie: true,
        cookieKey: 'lang',
        alwaysRedirect: false
      }
    }]
  ],
  axios: {
    // proxyHeaders: false
  },
  // loading: '~/components/loading.vue',
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },
  vuetify: {
    // customVariables: ['~/assets/variables.scss'],
    theme: {
      options: {
        customProperties: true
      },
      themes: {
        dark: {
          background: 'black'
        }
      },
      dark: true
    }
  },
  env: {
    WS_URL: process.env.WS_URL || 'http://localhost:3333'
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    transpile: [/^element-ui/]
  }
}
