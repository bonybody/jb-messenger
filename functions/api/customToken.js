const axios = require('axios')

module.exports = function ({admin, express, functions}) {

  express.get('/custom_token', async (req, res) => {
      const query = req.query
      const accessToken = query.accessToken
      const lineChannelId = functions.config().line.login.channel_id

      const lineAxios = axios.create({
        baseURL: 'https://api.line.me',
        responseType: 'json'
      })

      try {
        // アクセストークンの検証
        const verifyToken = await lineAxios.get('/oauth2/v2.1/verify', {
          params: {
            access_token: accessToken
          }
        })

        // チャネルIDをチェック
        if (verifyToken.data.client_id !== lineChannelId) {
          throw new Error('client_id does not match.')
        }

        //アクセストークンの有効期限
        if (verifyToken.data.expires_in < 0) {
          throw new Error('access token is expired.')
        }

        // uidの取得
        const userProfile = await lineAxios.get('/v2/profile', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          }
        })

        // カスタムトークンの作成
        await admin.auth().createCustomToken(userProfile.data.userId)
          .then(async function (customToken) {
            // userのfirestoreドキュメントが存在しなければ作成
            const userDoc = await admin.firestore().collection('users').doc(userProfile.data.userId).get()
            if (!userDoc.exists) {
              await userDoc.ref.set({
                display_name: userProfile.date.displayName,
                pictureUrl: userProfile.date.pictureUrl
              })
            }
            res.send(customToken)
          })
      } catch
        (e) {
        console.error(e)
      }
    }
  )
}
