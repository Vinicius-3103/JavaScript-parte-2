/*
  Módulo 6 — O DOM
  Exercício 05 — Criando elementos
  Nível: Intermediário

  Objetivo: createElement, textContent, classList e append.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

const turma = [
  { nome: "Ana", presente: true },
  { nome: "Bruno", presente: false },
  { nome: "Carla", presente: true },
  { nome: "Davi", presente: true },
  { nome: "Elisa", presente: false }
];
const ul = document.querySelector("#presenca");

let presentes = 0;

turma.forEach(aluno => {
  const item = document.createElement("li");
  item.textContent = `${aluno.nome} — ${aluno.presente ? "presente" : "falta"}`;
  if (!aluno.presente) item.classList.add("falta");
  else presentes += 1;
  ul.append(item);
});

const resumo = document.createElement("p");
resumo.textContent = `Presentes: ${presentes} de ${turma.length}`;
ul.after(resumo);
