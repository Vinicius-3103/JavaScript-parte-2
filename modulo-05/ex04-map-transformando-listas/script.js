/*
  Módulo 5 — Arrays e objetos
  Exercício 04 — map: transformando listas
  Nível: Básico

  Objetivo: Criar arrays novos com map.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

const numeros = [3, 8, 15, 22];
const nomes = ["ana", "léo", "bia"];

document.querySelector("#original").textContent = numeros.join(", ");

// TODO 1: Use map para criar "dobros" e mostre em #dobro.
// TODO 2: Use map para criar "emReais" com strings tipo "R$ 3.00"
//         (toFixed(2)) e mostre em #reais.
// TODO 3: Use map para colocar os nomes em MAIÚSCULAS e mostre em #maiusculas.
// TODO 4: Confira no console que o array "numeros" NÃO mudou.
matchMedia("(prefers-color-scheme: dark)").addEventListener("change", event => {
  if (event.matches) {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#fff";
  } else {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
  }
});

const dobro = numeros.map(num => num * 2);
document.querySelector("#dobro").textContent = dobro.join(", ");

const emReais = numeros.map(num => `R$ ${num.toFixed(2)}`);
document.querySelector("#reais").textContent = emReais.join(", ");

const maiusculas = nomes.map(nome => nome.toUpperCase());
document.querySelector("#maiusculas").textContent = maiusculas.join(", ");

console.log("Array original:", numeros);  