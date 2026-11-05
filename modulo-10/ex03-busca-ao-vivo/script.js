/*
  Módulo 10 — Projeto integrador (treinos)
  Exercício 03 — Busca ao vivo
  Nível: Intermediário

  Objetivo: Filtro por texto com input + filter + render.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

const contatos = [
  { nome: "Ana Souza", turma: "2º Info A" }, { nome: "Bruno Lima", turma: "3º Info B" },
  { nome: "Carla Dias", turma: "2º Info A" }, { nome: "Davi Rocha", turma: "1º Info A" },
  { nome: "Elisa Prado", turma: "3º Info B" }, { nome: "Fábio Neves", turma: "2º Adm" }
];

// TODO 1: renderizar(texto): filtra contatos cujo nome OU turma contém o texto
//         (ignorando maiúsculas: toLowerCase nos dois lados).
// TODO 2: Mostra cada um como <li> e, em #qtd, "3 contato(s) encontrado(s)".
// TODO 3: Sem resultados: um <li> "Ninguém encontrado".
// TODO 4: Ligue no evento "input" e chame renderizar("") no início.
// DESAFIO: destaque com <mark> o trecho encontrado no nome
//          (cuidado: aqui o texto é seu, mas pense no risco se viesse do usuário).
