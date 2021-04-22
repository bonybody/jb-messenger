const functions = require("firebase-functions")
const admin = require('firebase-admin')
const api = require('./api')

admin.initializeApp()
module.exports = {
  api: api({admin, functions})
}
