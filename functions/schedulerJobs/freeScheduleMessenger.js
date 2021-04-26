const functions = require('firebase-functions')
const Client = require('@line/bot-sdk').Client



export default function () {
  const config = {
    channelAccessToken: functions.config().line.messaging_api.access_token,
    channelSecret: functions.config().line.messaging_api.channel_secret
  }

  const client = new Client(config)
}