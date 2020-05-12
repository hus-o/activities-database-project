const express = require('express');
const PORT = process.env.PORT;
const knex = require('./knex/knex.js');
const app = express();

app.get('/', (req, res) => {
    res.send("hi")
  // use the knex variable above to create dynamic queries
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});