const express = require("express");
const { servicoBuscarFatoPortAno, servicoValidaAno } = require("./services");
const app = express();

app.get("/", (req, res) => {
  let ano = req.query.ano;
  let anoValido = servicoValidaAno(ano);

  if (anoValido === true) {
    let fato = servicoBuscarFatoPortAno(ano);
    let jsonMsg = ano >= 1920 && ano <= 2020 ? { ano: fato } : "Por favor digite um ano entre 1920 e 2020" ;
    res.json(jsonMsg);
  }
  if (anoValido === false) {
    res.status(400).json({ error: "Por favor digite um ano entre 1920 e 2020" });
  }
});

const port = 8080;
app.listen(port, () => {
  let data = new Date();
  console.log(`Server aberto com sucesso!
Data de abertura: ${data.toLocaleDateString()} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`);
});
