const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const ficheiro = path.join(__dirname, "pecas.json");
let pecas = JSON.parse(fs.readFileSync(ficheiro, "utf-8"));

function save() {
  fs.writeFileSync(ficheiro, JSON.stringify(pecas, null, 2));
}

app.get("/api/pecas", (req, res) => {
  res.json(pecas);
});

app.listen(3001, () => {
  console.log("Server a correr em http://localhost:3001");
});