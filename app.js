const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath)); //le dice a express que public es un recurso estatico

app.get("/home", function (req, res) {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});
