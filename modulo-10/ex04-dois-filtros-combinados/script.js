/*
  Módulo 10 — Projeto integrador (treinos)
  Exercício 04 — Dois filtros combinados
  Nível: Intermediário

  Objetivo: Estado de filtro em objeto + select + checkbox + busca.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

const livros = [
  { titulo: "Dom Casmurro", genero: "romance", disponivel: true },
  { titulo: "Eu, Robô", genero: "ficcao", disponivel: false },
  { titulo: "Lógica de Programação", genero: "tecnico", disponivel: true },
  { titulo: "Iracema", genero: "romance", disponivel: false },
  { titulo: "Fundação", genero: "ficcao", disponivel: true },
  { titulo: "HTML e CSS na prática", genero: "tecnico", disponivel: true }
];

const filtro = { texto: "", genero: "todos", soDisponiveis: false };

// TODO 1: livrosFiltrados() aplica OS TRÊS filtros ao mesmo tempo.
// TODO 2: renderizar() mostra os cards (classe "emprestado" quando indisponível).
// TODO 3: Cada controle atualiza a sua parte do objeto "filtro" e chama renderizar().
