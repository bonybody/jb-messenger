export default function ({redirect, $liff, store, $fire, $axios,}) {
  $liff.init(
    {
      liffId: process.env.liffId
    },
    async function () {
      // liffでログイン中かつfirebaseでログインしていない場合
      if ($liff.isLoggedIn() && !store.getters.isLoggedIn) {
        // liffのuIdを取得
        const accessToken = await $liff.getAccessToken()
        const baseUrl = process.env.apiUrl + '/api/custom_token'
        const query = `?accessToken=${accessToken}`
        const getTokenUrl = encodeURI(baseUrl + query)
        try {
          const customToken = await $axios.$get(getTokenUrl)
          await $fire.auth.signInWithCustomToken(customToken)
        } catch (e) {
          console.log(e.message)
        }
      }
      document.getElementById('first-view-animation').classList.add('onload')
    }
  )
}
