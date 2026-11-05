/*
  Módulo 8 — Formulários e validação
  Exercício 07 — Força da senha
  Nível: Intermediário

  Objetivo: Pontuar regras e desenhar uma barra com style.width.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

const regras = [
  { teste: s => s.length >= 8, dica: "Use pelo menos 8 caracteres" },
  { teste: s => /[A-Z]/.test(s), dica: "Inclua uma letra maiúscula" },
  { teste: s => /\d/.test(s), dica: "Inclua um número" },
  { teste: s => /[^A-Za-z0-9]/.test(s), dica: "Inclua um símbolo (!@#...)" }
];
const nomes = ["Muito fraca", "Fraca", "Média", "Boa", "Forte"];
const cores = ["#ccc", "crimson", "orange", "gold", "seagreen"];

// TODO 1: No "input" da senha, conte quantas regras passam (filter + length).
// TODO 2: Ajuste a barra: largura = pontos * 25 + "%", cor = cores[pontos].
// TODO 3: Mostre o nome do nível em #nivel.
// TODO 4: Em #dicas, liste só as dicas das regras que AINDA não passaram.
