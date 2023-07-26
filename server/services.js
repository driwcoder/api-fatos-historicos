const { fatosHistoricos } = require("./data/fatos");

function servicoValidaAno(ano) {
  let valido = !isNaN(ano) ? true : false
  return valido
}

function servicoBuscarFatoPortAno(ano) {
  let fato = fatosHistoricos.find(fato => fato.Ano === ano);
  return fato;
}

exports.servicoBuscarFatoPortAno = servicoBuscarFatoPortAno;
exports.servicoValidaAno = servicoValidaAno