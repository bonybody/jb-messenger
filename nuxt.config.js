import fs from 'fs'
import path from 'path'

const isDev = process.env.NODE_ENV === 'development'
export default {
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
  target: 'static',

  loading: {
    color: 'blue',
    height: '5px'
  },

  env: {
    clientUrl: isDev ? 'https://localhost:3000': '',
    apiUrl: 'https://us-central1-my-scheduling-52f1e.cloudfunctions.net',
    liffId: process.env.LIFF_ID
  },

  server: isDev ? {
    port: 3000,
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "localhost-key.pem")),
      cert: fs.readFileSync(path.resolve(__dirname, "localhost.pem")),
    }
  } : false,

  css: [
    {src: '@/assets/scss/index.scss', lang: 'scss'}
  ],
  styleResources: {
    scss: [
      '@/assets/scss/_variables.scss',
      '@/assets/scss/mixins/mixin.scss',
    ],
  },

  plugins: [
    '@/plugins/liff',
    '@/plugins/client-init',
    '@/plugins/my-auth',
    '@/plugins/api',
  ],
  components: true,

  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/firebase'
  ],

  firebase: {
    config: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENT_ID,
    },
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

  axios: {},

  pwa: {
    meta: false,
    icon: false,
    workbox: {
      importScripts: [
        // ...
        '/firebase-auth-sw.js'
      ],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: process.env.NODE_ENV === 'development',
    }
  },

  build: {}
}
