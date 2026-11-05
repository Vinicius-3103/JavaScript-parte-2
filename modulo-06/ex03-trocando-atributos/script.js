/*
  Módulo 6 — O DOM
  Exercício 03 — Trocando atributos
  Nível: Básico

  Objetivo: Mudar src, alt e href de elementos.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

const foto = document.querySelector("#foto");
const link = document.querySelector("#link");

document.querySelector("#trocar").addEventListener("click", () => {
  console.log("href antes:", link.getAttribute("href"));
  foto.setAttribute("src", "https://picsum.photos/id/1025/300/200");
  foto.setAttribute("alt", "Outro cachorro");
  link.setAttribute("href", "https://www.w3schools.com/js/");
  link.textContent = "W3Schools";
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
  console.log("href depois:", link.getAttribute("href"));
});
