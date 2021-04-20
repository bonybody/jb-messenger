const functions = require("firebase-functions")
const admin = require('firebase-admin')
const app = require('express')()
const axios = require('axios')
admin.initializeApp()

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
app.get('/custom_token', async (req, res) => {
  const query = req.query
  const accessToken = query.accessToken
  try {
    const userProfile = await axios.get('https://api.line.me/v2/profile', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    })

    await admin.auth().createCustomToken(userProfile.data.userId)
      .then(async function (customToken) {
        const userDoc = await admin.firestore().collection('users').doc(userProfile.data.userId).get()
        if (!userDoc.exists) {
          await userDoc.ref.set({
            display_name: userProfile.date.displayName,
            pictureUrl: userProfile.date.pictureUrl
          })
        }
        res.send(customToken)
      })
  } catch (e) {
    console.error(e)
  }
})

const api = functions.https.onRequest(app)
module.exports = {api}
