const admin = require('firebase-admin')
const functions = require('firebase-functions')
const Client = require('@line/bot-sdk').Client
const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')

dayjs.extend(utc)
dayjs.extend(timezone)

module.exports = functions.pubsub.schedule('every 1 minutes')
  .onRun(async (context) => {
    const config = {
      channelAccessToken: functions.config().line.messaging_api.access_token,
      channelSecret: functions.config().line.messaging_api.channel_secret
    }

    const targetDatetimes = {
      start: dayjs(context.timestamp).add(5, 'minute').startOf('minute').toDate(),
      end: dayjs(context.timestamp).add(5, 'minute').endOf('minute').toDate()
    }

    const client = new Client(config)

    try {
      const schedules = await admin.firestore().collection('schedules')
        .where('datetime', '>=', targetDatetimes.start)
        .where('datetime', '<=', targetDatetimes.end).get()

      schedules.forEach(async (doc) => {
        const formatedDatetime = dayjs(doc.data().datetime.toDate()).tz('Asia/Tokyo').format('YYYY年MM月D日H時m分')

        const message = messageFactory({
          id: doc.id,
          title: doc.data().title,
          datetime: formatedDatetime
        })

        await client.pushMessage(doc.data().user_id, {
          type: "flex",
          altText: doc.data().title + 'の直前です',
          contents: message
        })
      })
    } catch (e) {
      console.error(e)
    }
  })

const messageFactory = ({id, title, datetime}) => {
  return {
    "type":
      "bubble",
    "header":
      {
        "type":
          "box",
        "layout":
          "vertical",
        "contents":
          [
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "イベント直前です",
                  "wrap": true,
                  "size": "lg",
                  "weight": "bold",
                  "color": "#405996",
                  "align": "center"
                }
              ],
              "width": "80%",
              "borderWidth": "medium",
              "borderColor": "#405996",
              "cornerRadius": "xxl",
              "paddingAll": "md"
            }
          ],
        "cornerRadius":
          "xxl",
        "spacing":
          "none",
        "offsetStart":
          "none",
        "alignItems":
          "center",
        "offsetTop":
          "lg"
      }
    ,
    "body":
      {
        "type":
          "box",
        "layout":
          "vertical",
        "contents":
          [
            {
              "type": "text",
              "weight": "bold",
              "size": "lg",
              "text": title,
              "wrap": true
            },
            {
              "type": "box",
              "layout": "vertical",
              "margin": "lg",
              "spacing": "sm",
              "contents": [
                {
                  "type": "box",
                  "layout": "baseline",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "開始：",
                      "color": "#aaaaaa",
                      "size": "sm",
                      "flex": 0
                    },
                    {
                      "type": "text",
                      "text": datetime,
                      "wrap": true,
                      "color": "#666666",
                      "size": "sm",
                      "flex": 0
                    }
                  ]
                }
              ]
            }
          ]
      }
    ,
    "footer":
      {
        "type":
          "box",
        "layout":
          "vertical",
        "spacing":
          "sm",
        "contents":
          [
            {
              "type": "button",
              "style": "link",
              "height": "sm",
              "action": {
                "type": "uri",
                "label": "詳細を確認",
                "uri": "https://liff.line.me/1655866657-DP1vK3vk/Schedule/" + id
              }
            },
            {
              "type": "spacer",
              "size": "sm"
            }
          ],
        "flex":
          0
      }
  }
}
