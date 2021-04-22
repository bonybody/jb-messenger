const customToken = require('./customToken')
const express = require('express')()

module.exports = function ({admin, functions}) {
  express.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })

  customToken({express, admin, functions})

  return functions.region('asia-northeast1').https.onRequest(express)
}