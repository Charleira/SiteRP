const express = require('express');
const app = express();
const path = require('path');

// Serve o arquivo "index.html" quando a raiz do site for acessada
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Adicione as rotas e as funções do aplicativo aqui

// Inicie o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});