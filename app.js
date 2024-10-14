require("dotenv").config();
const express = require("express");
const app = express();
const hbs = require("hbs");

const port = process.env.PORT;

app.use(express.static("public"));

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home", { nombre: "Matias" });
});

app.get("/elements", (req, res) => {
  res.render("elements", { nombre: "Matias" });
});
app.get("/generic", (req, res) => {
  res.render("generic", { nombre: "Matias" });
});
app.get("/*", (req, res) => {
  res.render("home", { nombre: "Matias" });
});

app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${port}`);
});
