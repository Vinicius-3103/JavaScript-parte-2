/*
  Módulo 6 — O DOM
  Exercício 07 — Tabela dinâmica
  Nível: Intermediário

  Objetivo: Montar uma tabela inteira a partir de um array de objetos.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/
 
const times = [
  { turma: "2º Info A", pontos: 9, vitorias: 3 },
  { turma: "3º Info B", pontos: 12, vitorias: 4 },
  { turma: "1º Info A", pontos: 4, vitorias: 1 },
  { turma: "2º Adm", pontos: 7, vitorias: 2 }
];

const tbody = document.querySelector("#tabela tbody");
const classificados = [...times].sort((a, b) => b.pontos - a.pontos);

classificados.forEach((time, indice) => {
  const linha = document.createElement("tr");
  if (indice === 0) linha.classList.add("lider");

  [indice + 1, time.turma, time.pontos, time.vitorias].forEach(valor => {
    const celula = document.createElement("td");
    celula.textContent = valor;
    linha.append(celula);
  });

  tbody.append(linha);
});
