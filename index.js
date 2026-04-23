import express from "express";

const app = express();

app.use(express.json());

// Teste
app.get("/", (req, res) => {
  res.send("Backend funcionando");
});

// Chat
app.post("/api/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    const reply = "Recebi sua mensagem: " + userMessage;

    res.json({ reply });
  } catch (error) {
    res.status(500).json({ error: "Erro no servidor" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
