import liff from "@/plugins/liff";

export default async function ({redirect, store, $fire, $axios, $nuxt}, inject) {
  await liff.init({liffId: process.env.liffId}).then(async () => {
    inject('liff', liff)
    if (liff.isLoggedIn() && !$fire.auth.isLoggedIn) {
      // liffのuIdを取得
      const accessToken = await liff.getAccessToken()
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
  })
}
