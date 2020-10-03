const {connection} = require('./connection');
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require('./routes/blogRoutes');
const aboutRoutes = require('./routes/aboutRoutes');

const app = express();



mongoose
  .connect(connection.dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(3000, () => {
      console.log("Listening on port 3000.....");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));



app.get("/", (req, res) => {
  res.redirect("/blogs");
});

 
app.use(aboutRoutes)
app.use('/blogs', blogRoutes);


app.use((req, res) => {
  res.status(404).render("404");
});
