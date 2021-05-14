import fs from 'fs'
import path from 'path'

const isDev = process.env.NODE_ENV === 'development'
export default {
  head: {
    title: 'JB MESSENGER',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: '登録したスケジュールの日程直前でLINE通知を送ってくれます。'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.svg'},
    ],
    script: [
      {src: "https://static.line-scdn.net/liff/edge/2/sdk.js"},
    ]
  },

  ssr: false,
  target: 'static',

  loading: {
    color: 'blue',
    height: '5px'
  },

  env: {
    clientUrl: isDev ? 'https://localhost:3000' : process.env.VERCEL_DOMAIN,
    apiUrl: 'https://asia-northeast1-my-scheduling-52f1e.cloudfunctions.net',
    liffId: isDev ? process.env.LIFF_ID_DEV : process.env.LIFF_ID
  },

  server: isDev ? {
    port: 3000,
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "localhost-key.pem")),
      cert: fs.readFileSync(path.resolve(__dirname, "localhost.pem")),
    }
  } : false,

  css: [
    {src: '@/assets/scss/index.scss', lang: 'scss'},
  ],
  styleResources: {
    scss: [
      '@/assets/scss/_variables.scss',
      '@/assets/scss/mixins/mixin.scss',
    ],
  },

  plugins: [
    '@/plugins/composition-api',
    '@/plugins/client-init',
    '@/plugins/my-auth',
    '@/plugins/api',
    '@/plugins/date-handler',
    '@/plugins/sanitize',
    '@/plugins/global-dialog',
  ],
  components: false,

  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/firebase'
  ],
  
  buildModules: [
    '@nuxtjs/composition-api/module'
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
      },
      firestore: {
        memoryOnly: false,
      },
    },
  },

  axios: {},

  build: {}
}
