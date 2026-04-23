const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Porta correta (Railway usa variável de ambiente)
const PORT = process.env.PORT || 3000;

// Rota de teste
app.get("/", (req, res) => {
  res.send("Sofia backend rodando 🚀");
});

// Rota de chat
app.post("/chat", (req, res) => {
  const { message } = req.body;

  res.json({
    reply: `Você disse: ${message}`
  });
});

// Start do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
