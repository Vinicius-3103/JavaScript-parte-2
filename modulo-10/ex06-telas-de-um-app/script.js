/*
  Módulo 10 — Projeto integrador (treinos)
  Exercício 06 — Telas de um app
  Nível: Intermediário

  Objetivo: Controlar qual 'tela' aparece com hidden e um estado.

  Como fazer: leia cada TODO, resolva um de cada vez e teste no navegador
  antes de passar para o próximo. Console aberto (F12)!
*/

let tela = "inicio"; // "inicio" | "jogo" | "fim"
let rodada = 0;
let acertos = 0;
let a = 0, b = 0;
const RODADAS = 5;

// TODO 1: mostrarTela(nome): esconde as 3 seções (hidden = true) e mostra só
//         a "tela-" + nome.
// TODO 2: "Começar" exige um nome (validação) e vai para a tela de jogo.
// TODO 3: novaConta(): sorteia a e b de 1 a 10 (Math.floor(Math.random()*10)+1)
//         e mostra "Rodada 1/5: 7 × 8 = ?".
// TODO 4: "Responder" confere, mostra feedback, conta acertos e, depois de 5
//         rodadas, vai para a tela de fim: "NOME, você acertou 4 de 5!".
// TODO 5: "Jogar de novo" volta ao início.
