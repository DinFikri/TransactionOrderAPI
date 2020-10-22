const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')
const authorization = require('../../midleware/authorizationMidleware')

app.use(authorization)

app.get('/orders', (req, res) => {
  const result = db.get('orders', req.query)
  res.send(result)
})


module.exports = app