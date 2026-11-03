/*
  Módulo 5 — Arrays e objetos
  Exercício 09 — Ache o bug: arrays e objetos
  Nível: Desafio

  Objetivo: Corrigir erros clássicos de índice, filter e notação de colchetes.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

// TODO: Há 4 bugs. Corrija e comente cada um.
const alunos = [
  { nome: "Ana", nota: 7 },
  { nome: "Bruno", nota: 9.5 },
  { nome: "Carla", nota: 8 }
];

// 1) último aluno
const ultimo = alunos[alunos.length].nome;

// 2) aluno com nota 9.5
const destaque = alunos.filter(a => a.nota === 9.5);

// 3) quantos alunos
const quantidade = alunos.lenght;

// 4) ler a propriedade cujo nome está na variável
const campo = "nota";
const notaDoBruno = alunos[1].campo;

document.querySelector("#saida").textContent =
  `${ultimo} | ${destaque.nome} | ${quantidade} | ${notaDoBruno}`;
