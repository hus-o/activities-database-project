require('dotenv').config()
const express = require('express');
const PORT = process.env.PORT;
const path = require("path")
const activities = require("./routes/activities")
const knex = require('./knex/knex.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use("/", activities)

/* app.get('/', (req, res) => {
    res.render("index")
}); */

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});