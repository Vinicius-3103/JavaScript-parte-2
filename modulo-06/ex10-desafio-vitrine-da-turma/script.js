/*
  Módulo 6 — O DOM
  Exercício 10 — Desafio: vitrine da turma
  Nível: Desafio

  Objetivo: Mini-projeto: dados → elementos → contagem por categoria.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

const projetos = [
  { titulo: "To-do list", autor: "Ana", tecnologia: "JavaScript", destaque: true },
  { titulo: "Portfólio", autor: "Bruno", tecnologia: "HTML/CSS", destaque: false },
  { titulo: "Quiz de História", autor: "Carla", tecnologia: "JavaScript", destaque: false },
  { titulo: "Landing page", autor: "Davi", tecnologia: "HTML/CSS", destaque: true },
  { titulo: "Calculadora", autor: "Elisa", tecnologia: "JavaScript", destaque: false },
  { titulo: "Blog", autor: "Fábio", tecnologia: "PHP", destaque: false }
];

function criarCartao(projeto) {
  const cartao = document.createElement("article");
  cartao.classList.add("projeto");
  if (projeto.destaque) cartao.classList.add("destaque");

  const titulo = document.createElement("h3");
  titulo.textContent = projeto.titulo;
  const autor = document.createElement("p");
  autor.textContent = projeto.autor;
  const tecnologia = document.createElement("span");
  tecnologia.classList.add("tag");
  tecnologia.textContent = projeto.tecnologia;

  cartao.append(titulo, autor, tecnologia);
  return cartao;
}

const vitrine = document.querySelector("#vitrine");
const resumo = document.querySelector("#resumo");
const porTecnologia = {};

projetos.forEach(projeto => {
  vitrine.append(criarCartao(projeto));
  porTecnologia[projeto.tecnologia] = (porTecnologia[projeto.tecnologia] || 0) + 1;
});

resumo.textContent = Object.entries(porTecnologia)
  .map(([tecnologia, quantidade]) => `${tecnologia}: ${quantidade}`)
  .join(" · ");
