/*
  Módulo 4 — Funções
  Exercício 01 — Primeira função
  Nível: Básico

  Objetivo: Declarar e chamar uma função sem parâmetros.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

// TODO 1: Declare uma função chamada mostrarBoasVindas (sem parâmetros).
// TODO 2: Dentro dela, selecione o <p id="saida"> e troque o texto para
////         "Bem-vindo(a) ao Módulo 4!".
// TODO 3: Chame a função UMA vez, no final do arquivo.
// DESAFIO: chame a função antes de declará-la. Funciona? Por quê? (veja 4.5 na apostila)
function mostrarBoasVindas() {
  document.getElementById("saida").textContent = "Bem-vindo(a) ao Módulo 4!";
}

mostrarBoasVindas();