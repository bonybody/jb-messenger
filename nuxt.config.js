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
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  loading: {
    color: 'blue',
    height: '5px'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {src: '@/assets/scss/index.scss', lang: 'scss'}
  ],
  styleResources: {
    scss: [
      '@/assets/scss/_variables.scss',
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '@/plugins/firebase',
    '@/plugins/my-auth'
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
      // firestore: {
      //   memoryOnly: false,
      //   enablePersistence: true,
      //   emulatorPort: isDev && useEmulators ? 8080 : undefined,
      // },
      // functions: {
      //   emulatorPort: isDev && useEmulators ? 12345 : undefined,
      // },
      // storage: true,
      // database: {
      //   emulatorPort: isDev && useEmulators ? 9000 : undefined,
      // },
      // performance: true,
      // analytics: true,
      // remoteConfig: {
      //   settings: {
      //     fetchTimeoutMillis: 60000,
      //     minimumFetchIntervalMillis: 43200000,
      //   },
      //   defaultConfig: {
      //     welcome_message: 'Welcome',
      //   },
      // },
      // messaging: {
      //   createServiceWorker: true,
      // },
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: false,
    icon: false,

    workbox: {
      importScripts: [
        '/firebase-auth-sw.js'
      ],
      // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
      // only set this true for testing and remember to always clear your browser cache in development
      dev: isDev
    },
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
