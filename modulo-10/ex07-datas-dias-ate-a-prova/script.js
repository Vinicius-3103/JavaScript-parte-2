/*
  Módulo 10 — Projeto integrador (treinos)
  Exercício 07 — Datas: dias até a prova
  Nível: Intermediário

  Objetivo: Trabalhar com new Date e diferença em dias.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

function diasAte(dataTexto) {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  const alvo = new Date(dataTexto + "T00:00:00");
  return Math.round((alvo - hoje) / (1000 * 60 * 60 * 24));
}

// TODO 1: Teste diasAte no console com uma data de amanhã e uma de ontem.
// TODO 2: O form adiciona { materia, data } a um array (valide os dois campos).
// TODO 3: Ordene as provas pela data (mais próxima primeiro). Dica: as datas
//         "AAAA-MM-DD" podem ser comparadas como texto com localeCompare.
// TODO 4: Mostre "Matemática — faltam 3 dias", "— é HOJE!" (classe "hoje")
//         ou "— já passou" (classe "passou").
// TODO 5: Persistência no localStorage.
