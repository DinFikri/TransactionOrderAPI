const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')
const authorization = require('../../midleware/authorizationMidleware')

app.use(authorization)

app.post('/orders', (req, res) => {
  const body = req.body
  const result = db.add('orders', body)
  if (!result) {
    res.status(400).send('Wrong body')
  } else {
    res.send(result)
  }
  return
})


module.exports = app