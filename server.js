const express = require('express')
const app = express()
const db = require('..//flyravel-backend/db.json');
const port = 3000

app.get('/',(req, res) => {
  res.send(db);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})