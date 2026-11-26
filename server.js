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

app.post("/api/pecas", (req, res) => {
  const { name, value, color } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).json({ error: "O nome é obrigatório" });
  }
  if (color !== "Branca" && color !== "Preta") {
    return res.status(400).json({ error: "A cor tem de ser Branca ou Preta" });
  }
  const numero = Number(value);
  if (value === "" || value === null || value === undefined || Number.isNaN(numero) || numero < 0) {
    return res.status(400).json({ error: "O valor tem de ser um número igual ou maior que 0" });
  }

  const id = pecas.length > 0 ? Math.max(...pecas.map((p) => p.id)) + 1 : 1;
  const nova = { id, name: name.trim(), value: numero, color };
  pecas.push(nova);
  save();
  res.status(201).json(nova);
});

app.delete("/api/pecas/:id", (req, res) => {
  const id = Number(req.params.id);
  const indice = pecas.findIndex((p) => p.id === id);

  if (indice === -1) {
    return res.status(404).json({ error: "Peça não encontrada" });
  }

  pecas.splice(indice, 1);
  save();
  res.status(204).send();
});

app.listen(3001, () => {
  console.log("Server a correr em http://localhost:3001");
});