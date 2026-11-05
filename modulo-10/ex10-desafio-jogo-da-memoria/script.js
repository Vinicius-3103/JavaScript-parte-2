/*
  Módulo 10 — Projeto integrador (treinos)
  Exercício 10 — Desafio: jogo da memória
  Nível: Desafio

  Objetivo: Treino completo: estado, render, eventos, setTimeout e recorde salvo.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

const simbolos = ["🍎", "🚀", "🎧", "🐱", "⚽", "🌵", "💡", "🎲"];

let cartas = [];      // [{ id, simbolo, virada, par }]
let viradas = [];     // ids das cartas viradas na jogada atual (máx. 2)
let tentativas = 0;
let bloqueado = false;

// TODO 1: novoJogo(): duplica os símbolos, embaralha
//         (dica: .sort(() => Math.random() - 0.5)), cria os objetos e renderiza.
// TODO 2: renderizar(): um <button class="carta" data-id> por carta, com as
//         classes "virada"/"par" conforme o estado.
// TODO 3: Clique (delegação): ignore se bloqueado, se já virada ou se já par.
//         Vire a carta. Ao virar a 2ª: tentativas++; se forem iguais, marque "par";
//         se não, bloqueie e desvire as duas depois de 800 ms (setTimeout).
// TODO 4: Fim de jogo: todas com "par". Mostre a mensagem e salve o recorde
//         (MENOR número de tentativas) no localStorage.
// TODO 5: "Reiniciar" chama novoJogo().
