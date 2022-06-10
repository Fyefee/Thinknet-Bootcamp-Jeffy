const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
require('dotenv').config()

const app = express()
const routes = require('./app/routes')

const port = process.env.PORT

mongoose.connect(process.env.MONGOURL, { useNewUrlParser: true }).then(
  () => {
    console.log("Connect MongoDB success")
  })
  .catch((err) => 
  {
    console.log(err)
  }
);

const redis = require('./app/connection/redis')

app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/healthz', (req, res) => res.status(200).json({ status: 'OK' }))

app.use(routes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})