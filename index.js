const express = require("express");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Sofia backend rodando ");
});

app.post("/chat", (req, res) => {
  const { message } = req.body;

  res.json({
    reply: `Você disse: ${message}`
  });
});

app.listen(PORT, () => {
  console.log(" CODIGO NOVO EXECUTANDO ", PORT);
});
