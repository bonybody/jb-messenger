const functions = require('firebase-functions')
const express = require('express')()

module.exports = function () {
  express.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })

  express.use(require('./customToken')())

  return functions.region('asia-northeast1').https.onRequest(express)
}