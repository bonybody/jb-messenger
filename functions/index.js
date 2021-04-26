const functions = require("firebase-functions")
const admin = require('firebase-admin')
const api = require('./api')
const schedulerJobs = require('./schedulerJobs')

admin.initializeApp()

module.exports = {
  api: api(),
  schedulerJobs: schedulerJobs
}
