import fs from 'fs'
import path from 'path'

const isDev = process.env.NODE_ENV === 'development'
const useEmulators = false // manually change if emulators needed
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'my-scheduling',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
    ],
    script: [
      {src: "https://static.line-scdn.net/liff/edge/2/sdk.js"}
    ]
  },

  ssr: false,

  loading: {
    color: 'blue',
    height: '5px'
  },

  env: {
    clientUrl: isDev ? 'https://localhost:3000': '',
    apiUrl: 'https://us-central1-my-scheduling-52f1e.cloudfunctions.net',
    liffId: process.env.LIFF_ID
  },

  server: {
    port: 3000,
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "localhost-key.pem")),
      cert: fs.readFileSync(path.resolve(__dirname, "localhost.pem"))
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {src: '@/assets/scss/index.scss', lang: 'scss'}
  ],
  styleResources: {
    scss: [
      '@/assets/scss/_variables.scss',
      '@/assets/scss/mixins/mixin.scss',
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/liff',
    '@/plugins/client-init',
    '@/plugins/my-auth',
    '@/plugins/api',
    // {src: '@/plugins/my-auth/client-only', mode: 'client'},
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/firebase'
  ],

  firebase: {
    // lazy: false,
    config: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENT_ID,
    },
    // onFirebaseHosting: false,
    // terminateDatabasesAfterGenerate: true,
    services: {
      auth: {
        persistence: 'local',
        initialize: {
          onAuthStateChangedAction: 'onAuthStateChanged',
        },
        ssr: true,
      },
      firestore: {
        memoryOnly: false,
      },
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: false,
    icon: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
