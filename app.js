const express = require('express')
const app = express()
const db = require('./db.json');
const port = process.env.PORT || 3000;

app.get('/hello',(req, res) => {
  res.send(db);
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${port}`)
})