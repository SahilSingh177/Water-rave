const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const rp = require("request-promise");
const {createPost,getPosts} = require("./controllers/createPost")

mongoose
  .connect(process.env.DATABASE, {})
  .then(() => console.log("DB Connected"));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/createPost",createPost);
app.get("/getPosts", getPosts);

app.get("/getAutocomplete", (req, res, next) => {
  let { q } = req.query;
  console.log(q);
  const options = {
    method: 'GET',
    url: 'https://spott.p.rapidapi.com/places/autocomplete',
    qs: {limit: '8', skip: '0', country: 'IN', q: q , type: 'CITY'},
    headers: {
      'X-RapidAPI-Key': 'edab9738a2msh2c44a6c04856873p167e61jsnf24b391602b6',
      'X-RapidAPI-Host': 'spott.p.rapidapi.com'
    }
  };
    rp(options)
      .then((data) => {
        console.log(data[0]);
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
      });
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
